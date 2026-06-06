import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import ContactMessage from '@/models/ContactMessage';
import { getAuthUser } from '@/lib/auth';

export async function GET() {
  try {
    const authUser = await getAuthUser();
    if (!authUser || authUser.role !== 'director') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const messages = await ContactMessage.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: messages });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const newMessage = await ContactMessage.create(body);

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GOOGLE_GMAIL_ADDRESS,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GOOGLE_GMAIL_ADDRESS,
      to: process.env.GOOGLE_GMAIL_ADDRESS, // Sending to admin email
      subject: `New Contact Form Submission from ${body.name || 'User'}`,
      text: `
        You have received a new contact form submission:
        
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone || 'N/A'}
        Subject: ${body.subject || 'N/A'}
        Message: ${body.message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${body.subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
