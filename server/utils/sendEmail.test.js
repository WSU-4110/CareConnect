const sendEmail = require('./sendEmail');
const nodemailer = require('nodemailer');

// Mocking process.env variables
process.env.HOST = 'smtp.example.com';
process.env.SERVICE = 'gmail';
process.env.EMAIL_PORT = '587';
process.env.SECURE = 'true';
process.env.USER = 'your_email@gmail.com';
process.env.PASS = 'your_app_password';

// Mock nodemailer createTransport function
jest.mock('nodemailer');

describe('sendEmail function', () => {
  beforeEach(() => {
    // Clear all mocks
    jest.clearAllMocks();
  });

  it('should send an email successfully', async () => {
    // Mock nodemailer createTransport method
    nodemailer.createTransport.mockReturnValue({
      sendMail: jest.fn().mockResolvedValueOnce('Email sent successfully'),
    });

   
  });

  it('should handle invalid email address', async () => {
    // Mock console.error
    console.error = jest.fn();

    
  });

  it('should handle email sending failure', async () => {
    // Mock console.error
    console.error = jest.fn();

    // Mock nodemailer createTransport method to throw an error
    nodemailer.createTransport.mockReturnValue({
      sendMail: jest.fn().mockRejectedValueOnce('SMTP error'),
    });

    
  });
});
