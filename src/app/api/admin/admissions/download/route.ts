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
    
    // Fetch admissions within date range
    const admissions = await db.collection('admissions')
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
      'Student Name',
      'Email',
      'Phone',
      'Grade Applying',
      'Current School',
      'Message',
      'Submitted At'
    ];

    const rows = admissions.map(admission => {
      const studentName = `${admission.firstName} ${admission.middleName ? admission.middleName + ' ' : ''}${admission.lastName}`;
      const gradeApplying = `${admission.selectedClass} (${admission.academicYear})`;
      
      return [
        studentName,
        admission.email || 'Not provided',
        admission.phone,
        gradeApplying,
        admission.currentSchool || 'Not provided',
        admission.message || 'No message provided',
        format(new Date(admission.submittedAt), 'yyyy-MM-dd HH:mm:ss')
      ];
    });

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    // Return CSV file
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename=admissions_${format(minDate, 'yyyy-MM-dd')}_to_${format(maxDate, 'yyyy-MM-dd')}.csv`
      }
    });
  } catch (error) {
    console.error('Error downloading admissions data:', error);
    return NextResponse.json(
      { error: 'Failed to download admissions data' },
      { status: 500 }
    );
  }
} 