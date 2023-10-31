const mongoose = require("mongoose");

let instance = null;

module.exports = () => {
  if (!instance) {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    try {
      mongoose.connect(process.env.DB, connectionParams);
      console.log("Connected to database successfully");
      instance = mongoose.connection;
    } catch (error) {
      console.error(error);
      console.error("Could not connect to the database!");
    }
  }

  return instance;
};
