const nodemailer = require('nodemailer');

module.exports = async (email, subject, text) => {
  // Validate the email address
  if (!email) {
    console.error('sendEmail error: Email address is missing or invalid.');
    return; // Exit the function if the email is not valid
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.SECURE === 'true', // Ensure secure is a boolean
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    console.log(`Sending email to ${email}`);
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email not sent!');
    console.error(error);
  }
};
