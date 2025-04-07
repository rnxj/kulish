import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';

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
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('kulish_school');
    
    // Fetch career applications from the database
    const careers = await db.collection('careers')
      .find({})
      .sort({ submittedAt: -1 }) // Sort by submission date (newest first)
      .toArray();
    
      console.log("careers data form mongo...", careers)
    // Transform the data to match the expected format in the admin table
    const formattedCareers = careers.map(career => ({
      id: career._id.toString(),
      name: `${career.firstName} ${career.middleName ? career.middleName + ' ' : ''}${career.lastName}`,
      email: career.email,
      phone: career.phone,
      position: career.position,
      experience: career.experience || career.employer || 'Not specified',
      resume: career.resumeUrl,
      coverLetter: career.coverletterUrl,
      subject: career.subject || 'N/A',
      jobType: career.jobtype,
      currentBoard: career.currentBoard === 'Other' ? career.otherBoard : career.currentBoard,
      city: career.city,
      submittedAt: career.submittedAt.toISOString(),
      // Include all original fields for details view
      ...career
    }));

    return NextResponse.json(formattedCareers);
  } catch (error) {
    console.error('Failed to fetch career applications:', error);
    return NextResponse.json(
      { error: "Failed to fetch career applications" },
      { status: 500 }
    );
  }
} 