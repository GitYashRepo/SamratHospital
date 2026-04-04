import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  qualification: {
    type: String,
    required: [true, 'Please provide qualification'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  specialty: {
    type: String,
    required: [true, 'Please provide a specialty'],
  },
  experience: {
    type: String,
    required: [true, 'Please provide experience level'],
  },
  availability: {
    type: String,
    required: [true, 'Please provide availability details'],
  },
  image: {
    type: String, // Path to image in public folder
    required: [true, 'Please provide an image'],
  },
}, { timestamps: true });

export default mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema);
