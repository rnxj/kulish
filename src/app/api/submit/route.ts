import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

interface AdmissionForm {
  academicYear: string;
  selectedClass: string;
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  submittedAt?: Date;
  [key: string]: any; // Allows additional fields if needed
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData: AdmissionForm = await request.json();
    
    // Validate required fields
    if (!formData.academicYear || !formData.selectedClass || 
        !formData.firstName || !formData.lastName || 
        !formData.gender || !formData.phone) {
      return NextResponse.json(
        { message: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('kulish_school');
    
    // Add submission timestamp
    formData.submittedAt = new Date();
    
    // Insert form data into admissions collection
    const result = await db.collection('admissions').insertOne(formData);
    
    if (result.insertedId) {
      return NextResponse.json(
        { message: 'Admission submitted successfully', id: result.insertedId },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: 'Error submitting admission' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}
