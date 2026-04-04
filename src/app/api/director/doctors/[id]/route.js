import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Doctor from '@/models/Doctor';
import { getAuthUser } from '@/lib/auth';
import { unlink } from 'fs/promises';
import path from 'path';

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

    // Delete image file
    try {
      const filePath = path.join(process.cwd(), 'public', doctor.image);
      await unlink(filePath);
    } catch (e) {
      console.error('Error deleting image file:', e);
    }

    await Doctor.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: 'Doctor deleted' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
