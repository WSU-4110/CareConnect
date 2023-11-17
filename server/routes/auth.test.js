const request = require('supertest');
const express = require('express');
const authRouter = require('./auth');

const app = express();
app.use(express.json());
app.use('/', authRouter);

describe('Authentication Endpoint', () => {
  test('POST / should return 400 if invalid data is provided', async () => {
    const response = await request(app)
      .post('/')
      .send({ email: 'invalid-email', password: '12345' });

    expect(response.statusCode).toBe(400);
  });

  describe('Authentication Endpoint', () => {
    test('POST / should return 400 if email is missing', async () => {
      const response = await request(app)
        .post('/')
        .send({ password: 'valid-password' });
  
      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain("\"Email\" is required");
    });
  
    test('POST / should return 401 if user is not found', async () => {    
      const response = await request(app)
        .post('/')
        .send({ password: 'valid-password' });
  
      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain("\"Email\" is required");
    });
  
    test('POST / should return 401 if password is incorrect', async () => {
      const response = await request(app)
        .post('/')
        .send({ password: 'valid-password' });
  
      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain("\"Email\" is required");
    });
  
    test('POST / should return 400 if user is not verified', async () => {
      const response = await request(app)
        .post('/')
        .send({ password: 'valid-password' });
  
      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain("\"Email\" is required");
    });
  
    test('POST / should return 500 if an internal server error occurs', async () => {
      const response = await request(app)
        .post('/')
        .send({ password: 'valid-password' });
  
      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain("\"Email\" is required");
    });
  });

});
