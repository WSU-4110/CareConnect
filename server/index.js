// index.js
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");
const appointmentRoutes = require("./routes/appointment"); // Add this line
const adminsRoute = require('./routes/admins'); 
const adminAuthRoute = require('./routes/adminAuth');


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/appointments", appointmentRoutes); // Add this line
app.use('/api/admins', adminsRoute);
app.use('/api/admin/auth', adminAuthRoute);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

