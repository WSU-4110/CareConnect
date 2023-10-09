import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login'; // Make sure you have a Login component at this path
import './App.css';

const App = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  return (
    <div className="app">
      {showSignup ? (
        <Signup />
      ) : showLogin ? (
        <Login />
      ) : (
        <LandingPage toggleSignup={toggleSignup} toggleLogin={toggleLogin} />
      )}
    </div>
  );
};

const LandingPage = ({ toggleSignup, toggleLogin }) => {
  return (
    <div className="landing-page">
      <h1>Welcome to Care Connect</h1>
      <h2>Care and Connect for a Healthier Tomorrow.</h2>
      <div className="buttons">
        <button className="login-button" onClick={toggleLogin}>
          Login
        </button>
        <button className="signup-button" onClick={toggleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default App;
