// routes/adminDashboard.js

const express = require('express');
const router = express.Router();

// Route for the admin dashboard
router.get('/', (req, res) => {
  // You can perform any admin-specific actions or render the admin dashboard here
  res.status(200).json({ message: 'Admin Dashboard' });
});

module.exports = router;
