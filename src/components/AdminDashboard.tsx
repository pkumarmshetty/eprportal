

// 'use client'; // ✅ This is required to use useRouter and other client-side hooks

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { useRouter } from 'next/navigation';
// import AdjustIcon from '@mui/icons-material/Adjust';
// import { Button } from '@mui/material';
// const drawerWidth = 240;


// export default function AdminDashboard({ children }: { children: React.ReactNode }) {
//   const router = useRouter();

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       {/* <AppBar
//         position="fixed"
//         sx={{
//           width: `calc(100% - ${drawerWidth}px)`,
//           ml: `${drawerWidth}px`,
//           background: 'white',
//           color: 'black',
//         }}
//       >
//         <Toolbar>
          
//         </Toolbar>
//       </AppBar> */}
// <AppBar
//   position="fixed"
//   sx={{
//     width: `calc(100% - ${drawerWidth}px)`,
//     ml: `${drawerWidth}px`,
//     background: 'white',
//     color: 'black',
//   }}
// >
//   <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//     <Button
//       variant="outlined"
//       color="inherit"
//       onClick={() => router.push('/')}
//       sx={{
//         borderRadius: '20px',
//         textTransform: 'none',
//         fontWeight: 500,
//         px: 3,
//         borderColor: '#000',
//         color: '#000',
//         '&:hover': {
//           backgroundColor: '#000',
//           color: '#fff',
//         },
//       }}
//     >
//       Logout
//     </Button>
//   </Toolbar>
// </AppBar>

//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         {/* Logo */}
//         <ListItem disablePadding sx={{ backgroundColor: 'white', height: '64px' }}>
//           <ListItemButton>
//             <img
//               src="https://i.ibb.co/84sRtgGc/Frame-58270-1.png"
//               alt="Logo"
//               style={{ width: '100%', height: 'auto' }}
//             />
//           </ListItemButton>
//         </ListItem>

//         <Divider />

//         {/* Sidebar Menu */}
//         <List>
//            <ListItem disablePadding >
//               <ListItemButton
//                 onClick={() => router.push('/FlowDashboard')}
//                 sx={{
//                   borderRadius: '30px',
//                   mx: 1,
//                   '&:hover': {
//                     bgcolor: 'black',
//                     color: 'white',
//                     '& .MuiListItemIcon-root': {
//                       color: 'white',
//                     },
//                   },
//                 }}
//               >
//                 <ListItemIcon>
//                   <AdjustIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={"Registrations"} />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding >
//               <ListItemButton
//                 onClick={() => router.push('/admin/dashboard')}
//                 sx={{
//                   borderRadius: '30px',
//                   mx: 1,
//                   '&:hover': {
//                     bgcolor: 'black',
//                     color: 'white',
//                     '& .MuiListItemIcon-root': {
//                       color: 'white',
//                     },
//                   },
//                 }}
//               >
//                 <ListItemIcon>
//                   <AdjustIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={"Annual Filings"} />
//               </ListItemButton>
//             </ListItem>
//          <ListItem disablePadding >
//               <ListItemButton
//                 onClick={() => router.push('/admin/dashboard')}
//                 sx={{
//                   borderRadius: '30px',
//                   mx: 1,
//                   '&:hover': {
//                     bgcolor: 'black',
//                     color: 'white',
//                     '& .MuiListItemIcon-root': {
//                       color: 'white',
//                     },
//                   },
//                 }}
//               >
//                 <ListItemIcon>
//                   <AdjustIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={"Dashboard"} />
//               </ListItemButton>
//             </ListItem>
              
          
//         </List>
//       </Drawer>

//       <Box
//         component="main"
//         sx={{ flexGrow: 1, backgroundColor: '#F9F9F9', p: 3, minHeight: '100vh' }}
//       >
//         <Toolbar />
//         {children}
//       </Box>
//     </Box>
//   );
// }

// // when user in /FlowDashboard make registraion active with blaock color
'use client';

import * as React from 'react';
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useRouter, usePathname } from 'next/navigation';

const drawerWidth = 240;

export default function AdminDashboard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  // Sidebar menu config
  const menuItems = [
    { label: 'Registrations', icon: <AdjustIcon />, path: '/FlowDashboard' },
    { label: 'Annual Filings', icon: <AdjustIcon />, path: '/admin/dashboard' },
    { label: 'Dashboard', icon: <AdjustIcon />, path: '/admin/dashboard' }, // Can be adjusted to a unique path if needed
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Top App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          background: 'white',
          color: 'black',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => router.push('/')}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 500,
              px: 3,
              borderColor: '#000',
              color: '#000',
              '&:hover': {
                backgroundColor: '#000',
                color: '#fff',
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Logo */}
        <ListItem disablePadding sx={{ backgroundColor: 'white', height: '64px' }}>
          <ListItemButton>
            <img
              src="https://i.ibb.co/84sRtgGc/Frame-58270-1.png"
              alt="Logo"
              style={{ width: '100%', height: 'auto' }}
            />
          </ListItemButton>
        </ListItem>

        <Divider />

        {/* Sidebar Items */}
        <List>
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => router.push(item.path)}
                  sx={{
                    borderRadius: '30px',
                    mx: 1,
                    my: 0.5,
                    bgcolor: isActive ? 'black' : 'transparent',
                    color: isActive ? 'white' : 'inherit',
                    '& .MuiListItemIcon-root': {
                      color: isActive ? 'white' : 'inherit',
                    },
                    '&:hover': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .MuiListItemIcon-root': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: '#F9F9F9', p: 3, minHeight: '100vh' }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}


