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

export async function PUT(req, { params }) {
  try {
    const authUser = await getAuthUser();
    if (!authUser || authUser.role !== 'director') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const formData = await req.formData();
    
    const name = formData.get('name');
    const qualification = formData.get('qualification');
    const specialty = formData.get('specialty');
    const experience = formData.get('experience');
    const availability = formData.get('availability');
    const description = formData.get('description');
    const image = formData.get('image'); // This could be a file or null

    await dbConnect();
    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return NextResponse.json({ message: 'Doctor not found' }, { status: 404 });
    }

    let imageUrl = doctor.image;

    // If a new image is uploaded
    if (image && typeof image !== 'string') {
      const buffer = Buffer.from(await image.arrayBuffer());
      const base64Image = `data:${image.type};base64,${buffer.toString('base64')}`;

      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder: 'samrat-hospital/doctors',
        resource_type: 'image',
      });
      imageUrl = uploadResult.secure_url;
    }

    doctor.name = name || doctor.name;
    doctor.qualification = qualification || doctor.qualification;
    doctor.specialty = specialty || doctor.specialty;
    doctor.experience = experience || doctor.experience;
    doctor.availability = availability || doctor.availability;
    doctor.description = description || doctor.description;
    doctor.image = imageUrl;

    await doctor.save();

    return NextResponse.json({ success: true, data: doctor });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const authUser = await getAuthUser();
    if (!authUser || authUser.role !== 'director') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await dbConnect();
    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return NextResponse.json({ message: 'Doctor not found' }, { status: 404 });
    }

    // Since images are now on Cloudinary, we don't necessarily need to delete them from local filesystem.
    // However, if there are old doctors with local paths, we could try.
    // For Cloudinary deletion, we'd need the public_id, which we aren't storing explicitly (it's in the URL).
    // For now, we'll just delete the doctor from the database.

    await Doctor.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: 'Doctor deleted' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
