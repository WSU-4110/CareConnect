// models/Feedback.js
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    email: String,
    feedbackType: String,
    title: String,
    description: String,
    screenshot: String // assuming screenshot is a Base64 encoded string
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
