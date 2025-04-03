// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from 'next/server';
import { put } from "@vercel/blob";

// import multer from "multer";
// import aws from "aws-sdk";
import fs from "fs";
import { promisify } from "util";

const unlinkFile = promisify(fs.unlink);

// // Configure AWS S3
// const s3 = new aws.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION,
//   });

// // Multer Setup
// const upload = multer({ dest: "/tmp" });

// Disable Next.js body parser (for handling file uploads)
export const config = {
    api: {
      bodyParser: false,
    },
  };


  interface UploadFiles {
    resume: File;
    // coverletter: File;
    [key: string]: any; // Allows additional fields if needed
  }

// Upload handler function
export async function POST(req: Request): Promise<NextResponse> {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
    }

    // Parse form data
    const formData = await req.formData();
    const resume = formData.get("resume") as File | null;
    const coverletter = formData.get("coverletter") as File | null;

    if (!resume) {
      return NextResponse.json({ message: "No resume uploaded" }, { status: 400 });
    }

    if (!coverletter) {
      return NextResponse.json({ message: "No coverletter uploaded" }, { status: 400 });
    }

    // Convert Blob to Buffer
    const arrayBufferResume = await resume.arrayBuffer();
    const bufferResume = Buffer.from(arrayBufferResume);

    const arrayBufferCoverLetter = await coverletter.arrayBuffer();
    const bufferCoverLetter = Buffer.from(arrayBufferCoverLetter);

    // Upload file to Vercel Blob Storage
    const { url : resumeUrl } = await put(`resume/${resume.name}`, bufferResume, {
      token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN!,
      access: "public",
    });

    const { url : coverLetterUrl } = await put(`coverletter/${coverletter.name}`, bufferCoverLetter, {
      token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN!,
      access: "public",
    });

    return NextResponse.json({ message: "File Uploaded Successfully", resumeUrl: resumeUrl, coverLetterUrl: coverLetterUrl }, { status: 201 });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ message: "File Upload Failed" }, { status: 500 });
  }

    // return new Promise<void>((resolve, reject) => {
    //   upload.single("file")(req as any, res as any, async (err: any) => {
    //     if (err) return reject(res.status(500).json({ error: err.message }));
  
    //     try {
    //       const file = (req as any).file;
    //       const fileStream = fs.createReadStream(file.path);
  
    //       const uploadParams: aws.S3.PutObjectRequest = {
    //         Bucket: process.env.AWS_BUCKET_NAME as string,
    //         Key: `uploads/${file.originalname}`,
    //         Body: fileStream,
    //         ContentType: file.mimetype,
    //       };
  
    //       const result = await s3.upload(uploadParams).promise();
    //       await unlinkFile(file.path); // Delete temp file
  
    //       res.status(200).json({ url: result.Location });
    //       resolve();
    //     } catch (error) {
    //       res.status(500).json({ error: (error as Error).message });
    //       reject();
    //     }
    //   });
    // });
}