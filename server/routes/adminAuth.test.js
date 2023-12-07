const express = require('express');
const supertest = require('supertest');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const app = express();

jest.mock('bcrypt'); // Mock the entire 'bcrypt' module

describe('Admin Authentication Route', () => {
  beforeAll(() => {
    jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);
    jest.spyOn(jwt, 'sign').mockReturnValue('sampleToken');
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should respond with a token on valid login credentials', async () => {
    // ... (unchanged)
  });

  it('should respond with 401 on invalid email or password', async () => {
    // ... (unchanged)
  });

  it('should respond with 401 on invalid password', async () => {
    // ... (unchanged)
  });

  it('should respond with 500 on internal server error', async () => {
    // ... (unchanged)
  });
});
