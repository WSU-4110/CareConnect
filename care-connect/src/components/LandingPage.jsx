import React, { useState } from 'react';
import Signup from './Signup'; // Import the Signup component

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
        <button className="login-button">Login</button>
        <button className="signup-button" onClick={toggleSignup}>
          Signup
        </button>
      </div>
      {showSignup && <Signup />}
    </div>
  );
};

export default LandingPage;
