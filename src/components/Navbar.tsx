'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // ✅ State for login fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navItems = [
    'Home',
    'About CPB',
    'CPCB’s Activities',
    'Contact Us',
    'Sign Up',
    'Login',
  ];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleNavClick = (item: string) => {
    if (item === 'Login') setLoginOpen(true);
    if (item === 'Sign Up') window.location.href = '/signup';
  };

  const handlelogin = () => {
    console.log(email, password);
    if (email === "admin" && password === "admin") {
      const temp = localStorage.getItem('isOneRegistered')
      if (temp === true) {
        window.location.href = '/FlowDashboard';
      } else {
        window.location.href = '/FlowDashboard';
      } // Redirect to home page
    }
    if (email === "shaivik@gmail.com" && password === "user") {

      window.location.href = '/WasteCategory'; // Redirect to home page
    }
    if (email === "editor" && password === "editor") {
      window.location.href = '/FormBuilderPage'; // Redirect to home page
    }
    if (email === "editor1" && password === "editor1") {
      window.location.href = '/FormBuilderPage2'; // Redirect to home page
    }
    if (email === "producer@gmail.com") {
      localStorage.setItem('loggedInUser', 'producer');

      window.location.href = '/UserDashboard'; // Redirect to home page
    }
  }
  const [language, setLanguage] = React.useState('en');

  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      {/* <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'green',
          border: '1px solid lightgeen',
          color: 'white',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            minHeight: '40px !important', // force compact height
            height: '40px',
            paddingX: 2, // optional horizontal padding
          }}
        >
         
          <Box sx={{ display: 'flex', gap: 3 ,p:2}}>
            <Typography variant="body2" sx={{ color: 'white' }}>Language</Typography>
            <FormControl size="small" variant="outlined" sx={{ minWidth: 100 }}>
              <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                sx={{
                  backgroundColor: 'white',
                  height: '32px',
                  fontSize: '0.75rem',
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">Hindi</MenuItem>
                <MenuItem value="kn">Kannada</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body2" sx={{ cursor: 'pointer', color: 'white' }}>Home |</Typography>
            <Typography
              variant="body2"
              sx={{ cursor: 'pointer', color: 'white' }}
              onClick={() => {
                window.location.href = '/signup'; // Redirect to home page
              }}
            >
              signup |
            </Typography>      <Typography
              variant="body2"
              sx={{ cursor: 'pointer', color: 'white' }}
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Typography>
            
          </Box>

         
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: 'white' }}>Language</Typography>
            <FormControl size="small" variant="outlined" sx={{ minWidth: 100 }}>
              <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                sx={{
                  backgroundColor: 'white',
                  height: '32px',
                  fontSize: '0.75rem',
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">Hindi</MenuItem>
                <MenuItem value="kn">Kannada</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar> */}
      <AppBar
  position="static"
  elevation={0}
  sx={{
    backgroundColor: 'green',
    border: '1px solid lightgreen',
    color: 'white',
  }}
>
  <Toolbar
    sx={{
      minHeight: '40px !important',
      height: '40px',
      paddingX: 2,
      alignItems: 'center',
    }}
  >
    {/* Right-Aligned Menu */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
      <Typography variant="body2">Language</Typography>
      <FormControl size="small" variant="outlined" sx={{ minWidth: 100 }}>
        <Select
          value={language}
          onChange={handleChange}
          displayEmpty
          sx={{
            backgroundColor: 'white',
            height: '32px',
            fontSize: '0.75rem',
          }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="hi">Hindi</MenuItem>
          <MenuItem value="kn">Kannada</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="body2" sx={{ cursor: 'pointer' }}>
        Home |
      </Typography>

      <Typography
        variant="body2"
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          window.location.href = '/signup';
        }}
      >
        Signup |
      </Typography>

      <Typography
        variant="body2"
        sx={{ cursor: 'pointer' }}
        onClick={() => setLoginOpen(true)}
      >
        Login
      </Typography>
    </Box>
  </Toolbar>
</AppBar>

      <Dialog
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '10px',
            position: 'absolute',
            right: 10,
            top: 110,
            m: 0,
            zoom: '0.8'
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600, textAlign: 'center' }}>Login</DialogTitle>

        <DialogContent sx={{ pt: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Email */}
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Email / <b>Mobile Number</b> <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            {/* Password */}
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Password <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Enter"
                onChange={(e) => setPassword(e.target.value)}
                type={'password'}
              //   type={showPassword ? 'text' : 'password'}
              //   InputProps={{
              //     endAdornment: (
              //       <InputAdornment position="end">
              //         <IconButton onClick={() => setShowPassword(!showPassword)}>
              //           {showPassword ? <VisibilityOff /> : <Visibility />}
              //         </IconButton>
              //       </InputAdornment>
              //     ),
              //   }}
              />
              <Typography
                variant="body2"
                sx={{ mt: 0.5, fontSize: '12px', color: '#1976d2', cursor: 'pointer' }}
              >
                Forgot Password
              </Typography>
            </Box>

            {/* Captcha */}
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Enter Captcha <span style={{ color: 'red' }}>*</span>
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Enter"
                />
                <Box
                  sx={{
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000',
                    color: '#fff',
                    borderRadius: '4px',
                    fontWeight: 600,
                  }}
                >
                  63+1
                </Box>
                <IconButton>
                  <RefreshIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1.5,
            px: 3,
            pb: 2,
            pt: 3,
          }}
        >
          {/* Small Left-Aligned Button */}
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: 'none',
              backgroundColor: '#000',
              color: '#fff',
              borderRadius: '25px',
              fontWeight: 500,
              px: 3,
            }}
            onClick={handlelogin}
          >
            Send
          </Button>

          <Box sx={{ width: '100%' }}>
            <Typography variant="body2">
              Don’t have an account?{' '}
              <span style={{ color: '#1976d2', cursor: 'pointer' }}>Sign up</span>
            </Typography>
          </Box>

          <Typography
            variant="body2"
            align="center"
            sx={{ color: '#7CB342', cursor: 'pointer', fontWeight: 500, width: '100%' }}
            onClick={() => window.location.href = '/FlowDashboard'}
          >
            Login as Admin
          </Typography>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default Navbar;
