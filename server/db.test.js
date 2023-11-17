require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

describe('Database Connection', () => {
    beforeAll(async () => {
        const dbUri = process.env.DB || 'your_fallback_db_uri_here';
        await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('connects to the database successfully', () => {
        expect(mongoose.connection.readyState).toBe(1);
    });

    it('disconnects from the database successfully', async () => {
        await mongoose.disconnect();
        expect(mongoose.connection.readyState).toBe(0);
        await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }); // reconnect for other tests
    });

    it('reconnects to the database successfully', async () => {
        await mongoose.disconnect();
        await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
        expect(mongoose.connection.readyState).toBe(1);
    });

    it('handles failure to connect to the database', async () => {
        const invalidDbUri = 'mongodb://invalidUri';
        await expect(mongoose.connect(invalidDbUri, { useNewUrlParser: true, useUnifiedTopology: true })).rejects.toThrow();
    });
});
