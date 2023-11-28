// routes/appointment.js
const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail'); // Ensure the path is correct

router.post('/', async (req, res) => {
  const { name, email, date, time } = req.body;

  try {
    const subject = `Appointment Confirmation for ${name}`;
    const text = `Your appointment is confirmed for ${date} at ${time}.`;

    await sendEmail('wsucareconnect23@gmail.com', subject, text); // Send email to clinic
    await sendEmail(email, subject, `Dear ${name},\n${text}`); // Send confirmation to user

    res.status(200).json({ message: 'Appointment booked and email sent.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in booking appointment.' });
  }
});

module.exports = router;
