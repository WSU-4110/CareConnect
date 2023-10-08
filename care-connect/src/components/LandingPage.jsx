import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Care Connect</h1>
      <h2>Care and Connect for a Healthier Tomorrow.</h2>
      <div className="buttons">
        <Link to="/login" className="login-button">
          Login
        </Link>
        <Link to="/signup" className="signup-button">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;