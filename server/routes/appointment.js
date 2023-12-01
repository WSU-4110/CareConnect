const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment'); // Make sure to import the Appointment model
const sendEmail = require('../utils/sendEmail');

router.post('/', async (req, res) => {
  const { patient: name, email, appointmentDate: date, slot: time } = req.body;

  try {
    // Check if the slot is already booked
    const existingAppointment = await Appointment.findOne({ appointmentDate: date, slot: time });
    if (existingAppointment) {
      return res.status(400).json({ message: 'Slot already booked.' });
    }

    // Create a new appointment if the slot is available
    const newAppointment = new Appointment({
      appointmentDate: date,
      patient: name,
      slot: time,
      email,
      isBooked: true
    });
    await newAppointment.save();

    // Send email notifications
    const subject = `Appointment Confirmation for ${name}`;
    const text = `Your appointment is confirmed for ${date} at ${time}.`;
    await sendEmail('wsucareconnect23@gmail.com', subject, text); // Send email to clinic
    await sendEmail(email, subject, `Dear ${name},\n${text}`); // Send confirmation to user

    res.status(200).json({ success: true, message: 'Appointment booked and email sent.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in booking appointment.' });
  }
});

module.exports = router;
