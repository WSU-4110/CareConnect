import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgetPassword';
import { Button, Container, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Router>
        <Container className="app" style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} /> {/* Added this line */}
            {/* Add other routes if needed */}
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

const LandingPage = () => {
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
        <Button variant="outlined" color="primary" component={Link} to="/login" style={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/signup">
          Signup
        </Button>
      </Box>
    </Box>
  );
};

export default App;
