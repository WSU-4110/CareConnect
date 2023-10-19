import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material'; // Added Box
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = () => {
        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
            // Handle the email submission logic here
            console.log('Email submitted:', email);
        }
    };

    return (
        <Container component="main" maxWidth="xs" style={{ height: '100vh' }}> {/* Set height to 100vh */}
            <Box display="flex" flexDirection="column" justifyContent="center" height="100%"> {/* Added Box with flex styling */}
                <Typography variant="h5" align="center">
                    Forgot Password
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    helperText={emailError ? 'The email is required.' : ''}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Forgot Password
                </Button>
                <Button
                    fullWidth
                    color="secondary"
                    component={Link}
                    to="/login"
                >
                    Back to Login
                </Button>
            </Box>
        </Container>
    );
};

export default ForgotPassword;
