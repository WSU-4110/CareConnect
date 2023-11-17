// token.test.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { ObjectId } = require('mongoose').Types;
const TokenModel = require('./token');
mongoose.set('strictQuery', true);
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Token Model', () => {
  it('should create a new token document', async () => {
    const tokenData = {
      userId: new ObjectId(),
      token: 'some-random-token',
      createdAt: new Date(),
    };

    const token = new TokenModel(tokenData);
    const savedToken = await token.save();

    expect(savedToken._id).toBeDefined();
    expect(savedToken.userId).toEqual(tokenData.userId);
    expect(savedToken.token).toEqual(tokenData.token);
    expect(savedToken.createdAt).toEqual(tokenData.createdAt);
  });

  it('should not allow duplicate userId', async () => {
    const userId = new ObjectId();
    const tokenData1 = {
      userId,
      token: 'token-1',
    };

    const tokenData2 = {
      userId,
      token: 'token-2',
    };

    const token1 = new TokenModel(tokenData1);
    await token1.save();

    const token2 = new TokenModel(tokenData2);

    await expect(token2.save()).rejects.toThrow(mongoose.Error.MongoServerError);
  });

  it('should fail if required fields are missing', async () => {
    const tokenData = {};
    const token = new TokenModel(tokenData);
    await expect(token.save()).rejects.toThrow(mongoose.Error.ValidationError);
  });

  it('should update a token correctly', async () => {
    const userId = new ObjectId();
    const tokenData = {
      userId,
      token: 'initial-token',
    };

    const token = new TokenModel(tokenData);
    await token.save();

    const updatedToken = 'updated-token';
    await TokenModel.updateOne({ userId }, { token: updatedToken });

    const foundToken = await TokenModel.findOne({ userId });
    expect(foundToken.token).toEqual(updatedToken);
  });

  it('should delete a token correctly', async () => {
    const userId = new ObjectId();
    const tokenData = {
      userId,
      token: 'token-to-delete',
    };

    const token = new TokenModel(tokenData);
    await token.save();

    await TokenModel.deleteOne({ userId });
    const foundToken = await TokenModel.findOne({ userId });
    expect(foundToken).toBeNull();
  });

  it('should find a token by userId', async () => {
    const userId = new ObjectId();
    const tokenData = {
      userId,
      token: 'find-me-token',
    };

    const token = new TokenModel(tokenData);
    await token.save();

    const foundToken = await TokenModel.findOne({ userId });
    expect(foundToken.token).toEqual(tokenData.token);
  });

});
