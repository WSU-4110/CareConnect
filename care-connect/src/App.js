import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup'; // Import the Signup component

function App() {
  // Define a state variable to manage the visibility of the signup form
  const [showSignup, setShowSignup] = useState(false);

  // Function to toggle the signup form's visibility
  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="App">
      <LandingPage>
        {/* Render the Signup component conditionally */}
        {showSignup ? (
          <Signup />
        ) : (
          <div className="buttons">
            <button className="login-button">Login</button>
            <button className="signup-button" onClick={toggleSignup}>
              Signup
            </button>
          </div>
        )}
      </LandingPage>
    </div>
  );
}

export default App;
