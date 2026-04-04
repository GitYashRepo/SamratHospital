import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import ContactMessage from '@/models/ContactMessage';
import { getAuthUser } from '@/lib/auth';

export async function PATCH(req, { params }) {
  try {
    const authUser = await getAuthUser();
    if (!authUser || authUser.role !== 'director') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();

    await dbConnect();
    const message = await ContactMessage.findByIdAndUpdate(id, body, { new: true });

    if (!message) {
      return NextResponse.json({ message: 'Message not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: message });
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
    await ContactMessage.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: 'Message deleted' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
