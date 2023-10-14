import React, { useState } from 'react';
import Signup from './Signup'; // Import the Signup component
import Login from './Login';  // Corrected the import

const LandingPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Added this state

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);  // Make sure the Login doesn't show when Signup is toggled
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false); // Make sure the Signup doesn't show when Login is toggled
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Care Connect</h1>
      <h2>Care and Connect for a Healthier Tomorrow.</h2>
      <div className="buttons">
        <button className="login-button" onClick={toggleLogin}>Login</button>
        <button className="signup-button" onClick={toggleSignup}>
          Signup
        </button>
      </div>
      {showSignup && <Signup />}
      {showLogin && <Login />}
    </div>
  );
};

export default LandingPage;