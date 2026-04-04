import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Doctor from '@/models/Doctor';
import { getAuthUser } from '@/lib/auth';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

    // Upload image to Cloudinary (works in serverless / Vercel)
    const buffer = Buffer.from(await image.arrayBuffer());
    const base64Image = `data:${image.type};base64,${buffer.toString('base64')}`;

    const uploadResult = await cloudinary.uploader.upload(base64Image, {
      folder: 'samrat-hospital/doctors',
      resource_type: 'image',
    });

    const imageUrl = uploadResult.secure_url;

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
