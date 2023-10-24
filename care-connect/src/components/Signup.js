// Signup.js

import React, { Component } from 'react';
import './Signup.css';
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Add form submission logic here, e.g., send data to the server or perform client-side validation.

   // Example: Client-side validation

   
    const { username, email, password, confirmPassword } = this.state;
    const errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit data or perform other actions here.
      console.log('Form submitted successfully!');
    } else {
      this.setState({ errors });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, password, confirmPassword, errors } = this.state;

    return (
      <div className="signup-container">
        <h1>CareConnect</h1>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
