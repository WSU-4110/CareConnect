const { User, validate } = require('./user'); // Update the path accordingly
const passwordComplexity = require('joi-password-complexity');

// Mocking process.env.JWTPRIVATEKEY
process.env.JWTPRIVATEKEY = 'CareConnect'; 

describe('User Model', () => {
  it('should generate a valid authentication token', () => {
    const user = new User({
      _id: 'someUserId', 
      
    });

    const token = user.generateAuthToken();
    expect(token).toBeDefined();
  });

  it('should validate user data correctly', () => {
    const validUserData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'P@ssw0rd',
    };

    const result = validate(validUserData);
    expect(result.error).toBeUndefined();
  });

  it('should invalidate user data with missing required fields', () => {
    const invalidUserData = {
      
    };

    const result = validate(invalidUserData);
    expect(result.error).toBeDefined();
  });

  it('should invalidate user data with an invalid email', () => {
    const invalidEmailUserData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email', // Invalid email format
      password: 'P@ssw0rd',
    };

    const result = validate(invalidEmailUserData);
    expect(result.error).toBeDefined();
  });

  
});


