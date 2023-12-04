// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const sendEmail = require('../utils/sendEmail');

router.post('/submitFeedback', async (req, res) => {
    const { email, feedbackType, title, description, screenshot } = req.body;

    try {
        const newFeedback = new Feedback({ email, feedbackType, title, description, screenshot });
        await newFeedback.save();

        // Sending email to the specified address
        await sendEmail(
            "wsucareconnect23@gmail.com", // Recipient email address
            "New User Feedback Submitted", // Subject
            `Feedback Details:\nType: ${feedbackType}\nTitle: ${title}\nDescription: ${description}` // Email body
        );

        res.status(200).json({ message: "Feedback submitted and email sent." });
    } catch (error) {
        console.error("Error in submitting feedback:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
