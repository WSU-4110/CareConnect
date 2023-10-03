
import React, { useState } from 'react';
import Login from './Login';
import ReactDOM from "react-dom";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    console.log('Button clicked');
    setShowLogin(true);
  };

  const [currentForm, setCurrentForm] = useState('login');

  const openLoginFormTab = () => {
    const loginTab = window.open('', 'blank'); // Use '_blank' as the target attribute
    // You can customize the tab dimensions and other properties as needed.

   
    // Render the Login component inside the new tab
    loginTab.document.body.innerHTML = '<div id="login-form-container"></div>';
    ReactDOM.render(<Login onFormSwitch={setCurrentForm} />, loginTab.document.getElementById('login-form-container'));
  }

  return (
    <div className="landing-page">
      <h1>Welcome to Care Connect</h1>
      <h2>Care and Connect for a Healthier Tomorrow.</h2>
      <div className="buttons">
      <button className="login-button" onClick={openLoginFormTab}>Login</button>
      <button className="signup-button">Signup</button>
      </div>
      
    </div>
  );
};

export default LandingPage;
