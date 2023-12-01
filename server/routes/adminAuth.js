// route/adminAuth.js

const express = require('express');
const router = express.Router();
const Admin = require('../models/admin'); // Make sure to import your Admin model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Route for admin login
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin with the given email exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the entered password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If the email and password are valid, generate a JWT token
    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.SECRET_KEY, {
      expiresIn: '1h', // Token expires in 1 hour, you can adjust this as needed
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
