// sendEmail.test.js
const sendEmail = require('./sendEmail');
const nodemailer = require('nodemailer');

// Mock nodemailer
jest.mock('nodemailer');

describe('sendEmail', () => {
  // Mock environment variables
  process.env.HOST = 'mocked-host';
  process.env.SERVICE = 'mocked-service';
  process.env.EMAIL_PORT = '587'; // assuming your port is a string in the environment
  process.env.SECURE = 'false'; // assuming your secure flag is a string in the environment
  process.env.USER = 'mocked-user';
  process.env.PASS = 'mocked-password';

  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); 
  });

  afterEach(() => {
    consoleLogSpy.mockRestore(); 
    jest.restoreAllMocks(); // Restore other mocks
  });

  it('sends email successfully', async () => {
    // Mock nodemailer.createTransport
    const mockSendMail = jest.fn();
    nodemailer.createTransport.mockReturnValue({
      sendMail: mockSendMail,
    });

    const email = 'test@example.com';
    const subject = 'Test Subject';
    const text = 'Test Body';

    await sendEmail(email, subject, text);

    // Verify that sendMail was called with the correct parameters
    expect(mockSendMail).toHaveBeenCalledWith({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });

    // Verify that console.log was called with the success message
    expect(consoleLogSpy).toHaveBeenCalledWith('email sent successfully');
  });

  it('handles email sending failure', async () => {
    // Mock nodemailer.createTransport to throw an error
    nodemailer.createTransport.mockImplementation(() => {
      throw new Error('Mocked error');
    });

    const email = 'test@example.com';
    const subject = 'Test Subject';
    const text = 'Test Body';

    // Call sendEmail and capture the error
    const error = await sendEmail(email, subject, text);

    // Verify that console.log was called with the failure message
    expect(consoleLogSpy).toHaveBeenCalledWith('email not sent!');
    
    // Verify that the returned error matches the expected error
    expect(error.message).toEqual('Mocked error');
  });
});
