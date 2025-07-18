
'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import RefreshIcon from '@mui/icons-material/Refresh';

const NavbarMain = () => {
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
  };

  const handlelogin= () => {
  console.log(email, password);
  if(email==="admin" && password==="admin") {
    window.location.href = '/FlowDashboard'; // Redirect to home page
  }
  if(email==="user" && password==="user") {
    window.location.href = '/UserDashboard'; // Redirect to home page
  }
}

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'white',
          borderBottom: '1px solid #DDDDDD',
          height: '100px',
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', height: '50px', paddingX: 2 }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontSize: '1rem', color: '#fff' }}>
            <img
              src="https://i.ibb.co/84sRtgGc/Frame-58270-1.png"
              alt="Logo"
              style={{ height: '40px', width: 'auto' }}
            />
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: 'black', textTransform: 'none', fontSize: '0.875rem' }}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item} onClick={() => handleNavClick(item)}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

     
    
      <Dialog
  open={loginOpen}
  onClose={() => setLoginOpen(false)}
  maxWidth="xs"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: '16px',
      position: 'absolute',
      right: 200,
      top: 120,
      m: 0,
      zoom:'0.8'
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
    >
      Login as Admin
    </Typography>
  </DialogActions>
</Dialog>

    </>
  );
};

export default NavbarMain;

