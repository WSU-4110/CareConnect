const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  appointmentDate: String,
  treatmentName: String,
  patientName: String,
  slot: String,
  email: String,
  phone: String,
  price: Number,
  isBooked: { type: Boolean, default: false }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
