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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation'; // ✅ for redirect

const DashboardNavbar = () => {
  const router = useRouter(); // ✅ initialize router
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = ['Logout'];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleNavClick = (item: string) => {
    if (item === 'Logout') {
      router.push('/'); // ✅ redirect to home
    }
  };

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
          <Typography variant="h6" sx={{ fontSize: '1rem', color: '#fff' }}>
            <img
              src="https://i.ibb.co/84sRtgGc/Frame-58270-1.png"
              alt="Logo"
              style={{ height: '40px', width: 'auto' }}
            />
          </Typography>

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
    </>
  );
};

export default DashboardNavbar;
