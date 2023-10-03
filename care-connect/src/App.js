import React, { useState } from 'react';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="app">
      {showSignup ? (
        <Signup />
      ) : (
        <LandingPage toggleSignup={toggleSignup} />
      )}
    </div>
  );
};

const LandingPage = ({ toggleSignup }) => {
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
    </div>
  );
};

export default App;
