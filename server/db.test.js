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
});
