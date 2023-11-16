const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.set('strictQuery', false);

  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to the database successfully");

    // Event listeners for connection events
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    mongoose.connection.on('connected', () => {
      console.log('MongoDB reconnected');
    });

  } catch (error) {
    console.error('Could not connect to the database!', error);
  }
};
