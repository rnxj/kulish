import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { format } from 'date-fns';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Verify token middleware
const verifyToken = (authHeader: string | null) => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.split(' ')[1];
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
};

export async function GET(request: Request) {
  // Verify authentication
  const authHeader = request.headers.get('authorization');
  if (!verifyToken(authHeader)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!startDate || !endDate) {
      return NextResponse.json({ error: 'Missing date parameters' }, { status: 400 });
    }

    // Parse dates
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Ensure dates are in correct order
    const [minDate, maxDate] = start > end ? [end, start] : [start, end];

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('kulish_school');
    
    // Fetch careers within date range
    const careers = await db.collection('careers')
      .find({
        submittedAt: {
          $gte: minDate,
          $lte: maxDate
        }
      })
      .sort({ submittedAt: -1 })
      .toArray();

    // Prepare CSV content
    const headers = [
      'Name',
      'Email',
      'Phone',
      'Position',
      'Job Type',
      'Subject',
      'Current Board',
      'City',
      'Current Employer',
      'CTC',
      'Notice Period',
      'Submitted At'
    ];

    const rows = careers.map(career => {
      const name = `${career.firstName} ${career.middleName ? career.middleName + ' ' : ''}${career.lastName}`;
      const currentBoard = career.currentBoard === 'Other' ? career.otherBoard : career.currentBoard;
      
      return [
        name,
        career.email,
        career.phone,
        career.position,
        career.jobtype,
        career.subject || 'N/A',
        currentBoard || 'N/A',
        career.city || 'N/A',
        career.employer || 'N/A',
        career.ctc || 'N/A',
        career.noticeperiod || 'Not specified',
        format(new Date(career.submittedAt), 'yyyy-MM-dd HH:mm:ss')
      ];
    });

    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    // Create a data URL
    const dataUrl = `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`;

    // Return the data URL
    return NextResponse.json({ downloadUrl: dataUrl });
  } catch (error) {
    console.error('Error generating CSV:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSV file' },
      { status: 500 }
    );
  }
} 