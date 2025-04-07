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
    
    // Fetch admissions from the database
    const admissions = await db.collection('admissions')
      .find({})
      .sort({ submittedAt: -1 }) // Sort by submission date (newest first)
      .toArray();
    
    // Transform the data to match the expected format in the admin table
    const formattedAdmissions = admissions.map(admission => ({
      id: admission._id.toString(),
      studentName: `${admission.firstName} ${admission.middleName ? admission.middleName + ' ' : ''}${admission.lastName}`,
      parentName: admission.parentName || 'Not provided',
      email: admission.email || 'Not provided',
      phone: admission.phone,
      gradeApplying: `${admission.selectedClass} (${admission.academicYear})`,
      message: admission.message || 'No message provided',
      currentSchool: admission.currentSchool || 'Not provided',
      submittedAt: admission.submittedAt.toISOString(),
      // Include all original fields for details view
      ...admission
    }));

    return NextResponse.json(formattedAdmissions);
  } catch (error) {
    console.error('Failed to fetch admission enquiries:', error);
    return NextResponse.json(
      { error: "Failed to fetch admission enquiries" },
      { status: 500 }
    );
  }
} 