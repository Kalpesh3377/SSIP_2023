import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SignIn() {
  const [aadhar, setAadhar] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [otpSent, setOtpSent] = React.useState(false);
  const [otp, setOtp] = React.useState('');

  const handleAadharChange = (event) => {
    const input = event.target.value;
    setAadhar(input);
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    setPhone(input);
  };

  const handleSendOTP = () => {
    // Implement your OTP sending logic here.
    // Set the 'otpSent' state to true if OTP is sent successfully.
    setOtpSent(true);
  };

  const handleVerifyOTP = () => {
    // Implement your OTP verification logic here.
    // Use the 'otp' state to check if it matches the expected OTP.
    // Display success or error message accordingly.
    if (otp === '123456') { // Replace '123456' with the actual expected OTP
      alert('OTP is valid. User is authenticated.');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="aadhar"
              label="Aadhar Number"
              name="aadhar"
              autoComplete="aadhar"
              value={aadhar}
              onChange={handleAadharChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
            {otpSent ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="otp"
                label="OTP"
                name="otp"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
              />
            ) : null}
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={otpSent ? handleVerifyOTP : handleSendOTP}
            >
              {otpSent ? 'Verify OTP' : 'Send OTP'}
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
