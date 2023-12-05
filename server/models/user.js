const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const token = require('./token');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: true },

  //Used for profile page (Mohan)
  bio: String,
  dob: Date,
  gender: String,
  personalInfo: String,
  profilePic: String,
});

userSchema.methods.generateAuthToken = function () {
<<<<<<< HEAD
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	//console.log(token)
	return token;

=======
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: '7d',
  });
  console.log(token);
  return token;
>>>>>>> f172b713dccd1f8b96c6bca1f71df1db93601619
};

const User = mongoose.model('User', userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label('First Name'),
    lastName: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    password: passwordComplexity().required().label('Password'),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
