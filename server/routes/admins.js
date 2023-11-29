// routes/admins.js

const express = require('express');
const router = express.Router();
const Admin = require('../models/admin'); // You need to create an Admin model in your models folder
const bcrypt = require('bcrypt');

// Route to create a new admin
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if admin with the given email already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin with this email already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new admin
    const newAdmin = new Admin({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the admin to the database
    await newAdmin.save();

    // You might want to generate and send a token for authentication here

    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add more routes as needed for admin functionality

module.exports = router;
