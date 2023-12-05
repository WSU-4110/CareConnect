// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const passwordResetRoutes = require('./routes/passwordReset');
const appointmentRoutes = require('./routes/appointment'); // Add this line
const adminsRoute = require('./routes/admins');
const adminAuthRoute = require('./routes/adminAuth');
const adminDashboardRoute = require('./routes/adminDashboard');
const postRoutes = require('./routes/postRoutes');

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/password-reset', passwordResetRoutes);
app.use('/api/appointments', appointmentRoutes); // Add this line
app.use('/api/admins', adminsRoute);
app.use('/api/admin/auth', adminAuthRoute);
app.use('/api/admin/dashboard', adminDashboardRoute);
app.use('/api', postRoutes);
app.post('/api/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).send(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = process.env.PORT || 5001;
app.listen(port, console.log(`Listening on port ${port}...`));
