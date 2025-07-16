'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const Navbar = () => {
  const [language, setLanguage] = React.useState('en');

  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  };

  return (
    <AppBar
  position="static"
  elevation={0}
  sx={{
    backgroundColor: 'white',
    border: '1px solid #DDDDDD',
    color: 'black',
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
    {/* Left Menu */}
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Typography variant="body2" sx={{ cursor: 'pointer', color: 'black' }}>Home |</Typography>
      <Typography variant="body2" sx={{ cursor: 'pointer', color: 'black' }}>Site Map |</Typography>
      <Typography variant="body2" sx={{ cursor: 'pointer', color: 'black' }}>RTI</Typography>
    </Box>

    {/* Right Language Dropdown */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant="body2" sx={{ color: 'black' }}>Language</Typography>
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
</AppBar>

  );
};

export default Navbar;
