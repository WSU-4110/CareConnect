const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  // Set up a test MongoDB connection using mongodb-memory-server
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}, 10000); // Increase timeout to 10 seconds

afterAll(async () => {
  // Disconnect Mongoose after all tests and stop the MongoDB server
  await mongoose.disconnect();
  await mongoServer.stop();
}, 10000); // Increase timeout to 10 seconds

describe('Admin Model', () => {
  it('should save an admin', async () => {
    // Your test logic here
    // Example: Create and save an admin
    const Admin = require('./admin');
    const adminData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };

    const savedAdmin = await Admin.create(adminData);
    expect(savedAdmin.firstName).toBe(adminData.firstName);
    expect(savedAdmin.lastName).toBe(adminData.lastName);
    expect(savedAdmin.email).toBe(adminData.email);
    // Add more assertions as needed
  });
});
