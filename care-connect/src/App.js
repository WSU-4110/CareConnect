import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgetPassword';
import { Button, Typography, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            {/* Add other routes as needed */}
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

const LandingPage = () => {
  return (
    <Container>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            CareConnect
          </Typography>
          <Button color="inherit" component={Link} to="/about">About us</Button>
          <Button color="inherit" component={Link} to="/find-therapy">Find therapy</Button>
          <Button color="inherit" component={Link} to="/faq">FAQ</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/login">Sign in</Button>
          <Button color="inherit"  component={Link} to="/signup">Sign up</Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          ONLINE THERAPY
        </Typography>
        <Typography variant="h2" gutterBottom>
          Get the help you need
        </Typography>
        <Typography variant="body1" gutterBottom>
          Embark on a journey of healing and understanding with professional guidance at your fingertips.
        </Typography>
        <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }} component={Link} to="/Signup">
          Get Started
        </Button>
        {/* Add your illustration here */}
        <img src="/src/image/landingPageImage.jpg" alt="Illustration" style={{ marginTop: '50px', width: '100%', maxWidth: '500px' }} />
      </Container>
    </Container>
  );
};

export default App;
