import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

interface CareersForm {
    position:string;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    phone: string;
    email: string;
    jobtype:string;
    ctc:string;
    employer:string;
    noticeperiod:string;
    currentBoard: string;
    otherBoard: string;
    pincode:string;
    city:string;
    subject:string;
    resumeUrl:string;
    coverletterUrl: string;
    submittedAt?: Date;
    [key: string]: any; // Allows additional fields if needed
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData: CareersForm = await request.json();
    
    // Validate required fields
    if (!formData.position || !formData.jobtype || 
        !formData.firstName || !formData.lastName || !formData.noticeperiod ||
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
    const result = await db.collection('careers').insertOne(formData);
    
    if (result.insertedId) {
      return NextResponse.json(
        { message: 'Careers form submitted successfully', id: result.insertedId },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: 'Error submitting careers form' },
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
