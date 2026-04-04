import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Doctor from '@/models/Doctor';
import { getAuthUser } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    await dbConnect();
    const doctors = await Doctor.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: doctors });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const authUser = await getAuthUser();
    if (!authUser || authUser.role !== 'director') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const name = formData.get('name');
    const qualification = formData.get('qualification');
    const specialty = formData.get('specialty');
    const experience = formData.get('experience');
    const availability = formData.get('availability');
    const description = formData.get('description');
    const image = formData.get('image');

    if (!name || !qualification || !description || !image || !specialty || !experience || !availability) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), 'public/uploads/doctors');
    await mkdir(uploadDir, { recursive: true });

    // Handle Image Upload
    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = `${Date.now()}-${image.name.replaceAll(' ', '_')}`;
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    const imageUrl = `/uploads/doctors/${filename}`;

    await dbConnect();
    const newDoctor = await Doctor.create({
      name,
      qualification,
      specialty,
      experience,
      availability,
      description,
      image: imageUrl,
    });

    return NextResponse.json({ success: true, data: newDoctor }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
