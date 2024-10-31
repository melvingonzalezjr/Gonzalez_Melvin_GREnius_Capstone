import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  admissionRate: Number,
  inStateTuition: Number,
  outOfStateTuition: Number,
});

export default mongoose.model('School', schoolSchema);
