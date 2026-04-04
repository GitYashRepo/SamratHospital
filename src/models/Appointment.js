import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide full name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone number'],
  },
  selectedSpecialty: {
    type: String,
    required: [true, 'Please provide specialty'],
  },
  appointmentDate: {
    type: String,
    required: [true, 'Please provide appointment date'],
  },
  appointmentTime: {
    type: String,
    required: [true, 'Please provide appointment time'],
  },
  notes: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending',
  },
}, { timestamps: true });

export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);
