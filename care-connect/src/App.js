import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import { Button, Container, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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

  const containerStyles = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: showSignup || showLogin ? 'flex-start' : 'center',
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container className="app" style={containerStyles}>
        {showSignup ? (
          <Signup />
        ) : showLogin ? (
          <Login />
        ) : (
          <LandingPage toggleSignup={toggleSignup} toggleLogin={toggleLogin} />
        )}
      </Container>
    </ThemeProvider>
  );
};

const LandingPage = ({ toggleSignup, toggleLogin }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      height="80%"
      mt={5}
      textAlign="center"
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Care Connect
      </Typography>
      <Typography variant="h5" gutterBottom>
        Care and Connect for a Healthier Tomorrow.
      </Typography>
      <Box mt={2}>
        <Button variant="outlined" color="primary" onClick={toggleLogin} style={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button variant="contained" color="primary" onClick={toggleSignup}>
          Signup
        </Button>
      </Box>
    </Box>
  );
};

export default App;