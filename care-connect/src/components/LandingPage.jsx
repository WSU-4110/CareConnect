import React from 'react';
import { Button, Typography, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const LandingPage = () => {
  return (
    <Container>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            OnlineMinds
          </Typography>
          <Button color="inherit">About us</Button>
          <Button color="inherit">Find therapy</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Sign in</Button>
          <Button color="primary" >Sign up</Button>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.
        </Typography>
        <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
          Get Started
        </Button>
        {/* Add your illustration here */}
        <img src="/image/landingPageImage.jpg" alt="Illustration" style={{ marginTop: '50px', width: '100%', maxWidth: '500px' }} />
      </Container>
    </Container>
  );
};

export default LandingPage;
