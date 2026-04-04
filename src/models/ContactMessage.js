import mongoose from 'mongoose';

const ContactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
  },
  phone: {
    type: String,
  },
  subject: {
    type: String,
    required: [true, 'Please provide subject'],
  },
  message: {
    type: String,
    required: [true, 'Please provide message'],
  },
  status: {
    type: String,
    enum: ['unread', 'read', 'meeting_scheduled', 'resolved'],
    default: 'unread',
  },
}, { timestamps: true });

export default mongoose.models.ContactMessage || mongoose.model('ContactMessage', ContactMessageSchema);
