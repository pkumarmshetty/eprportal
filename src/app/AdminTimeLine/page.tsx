// 'use client';
// import React, { useState } from 'react';
// import {
//   AppBar,
//   Box,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Toolbar,
//   Typography,
//   TextField,
//   List,
//   ListItem,
//   ListItemText,
//   Avatar,
//   Divider,
// } from '@mui/material';

// export default function VerificationPage() {
//   const [checks, setChecks] = useState({
//     facilityPhoto: false,
//     captureLocation: false,
//     gpsLocation: false,
//     machinePhoto: false,
//     electricityMeter: false,
//   });

//   const handleCheck = (key: keyof typeof checks) => {
//     setChecks({ ...checks, [key]: !checks[key] });
//   };

//   return (
//     <Box sx={{ height: '100vh', overflow: 'hidden',padding:'10px',zoom:0.8 }}>
//       {/* AppBar */}
//       <AppBar
//         position="fixed"
//         sx={{
//           width: '100%',
//           background: 'white',
//           color: 'black',
//           boxShadow: 1,
//           zIndex: 1201,
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start' }}>
//           <Typography variant="h6" sx={{ fontSize: '1rem', color: 'black' }}>
//             <img
//               src="https://i.ibb.co/84sRtgGc/Frame-58270-1.png"
//               alt="Logo"
//               style={{ height: '40px', width: 'auto' }}
//             />
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Body */}
//       <Box sx={{ display: 'flex', pt: 8, height: 'calc(100vh - 64px)' }}>
//         {/* Left Panel */}
//         <Box sx={{ width: '20%', padding: 2, bgcolor: '#f9f9f9' }}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Details Needs to Verify
//           </Typography>
//           {Object.entries(checks).map(([key, value]) => (
//             <FormControlLabel
//               key={key}
//               control={
//                 <Checkbox
//                   checked={value}
//                   onChange={() => handleCheck(key as keyof typeof checks)}
//                 />
//               }
//               label={key
//                 .replace(/([A-Z])/g, ' $1')
//                 .replace(/^./, str => str.toUpperCase())}
//             />
//           ))}
//         </Box>

      

//         <Box sx={{ width: '100%', padding: 2, textAlign: 'center' }}>
//   <Box mt={2} display="flex" justifyContent="center">
//     <Button variant="outlined" sx={{margin:'20px'}} onClick={() => window.location.href = '/capture'}>
//       capture
//     </Button>
//   </Box>

//   <Box
//     sx={{
//       height: '85%',
//       padding: '20px',
//       backgroundColor: '#eaeaea',
//       borderRadius: 2,
//       boxShadow: 2,
//       overflow: 'hidden',
//     }}
//   >
//     <iframe
//       src="https://8x8.vc/vpaas-magic-cookie-cf5217ce8a4048d89baa3f88ab649551/eprverification"
//       title="EPR Verification Video"
//       width="100%"
//       height="100%"
//       style={{
//         border: 'none',
//         borderRadius: '8px',
//       }}
//       allow="camera; microphone; fullscreen; speaker; display-capture"
//       allowFullScreen
//     ></iframe>
//   </Box>
// </Box>

//       </Box>
//     </Box>
//   );
// }

'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Toolbar,
  Typography,
} from '@mui/material';

export default function VerificationPage() {
  const [checks, setChecks] = useState({
    facilityPhoto: false,
    captureLocation: false,
    gpsLocation: false,
    machinePhoto: false,
    electricityMeter: false,
  });

  const handleCheck = (key: keyof typeof checks) => {
    setChecks({ ...checks, [key]: !checks[key] });
  };

  return (
    <Box sx={{ height: '100vh', overflow: 'hidden', padding: '10px', zoom: 0.8 }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          background: 'white',
          color: 'black',
          boxShadow: 1,
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Typography variant="h6" sx={{ fontSize: '1rem', color: 'black' }}>
            <img
              src="https://i.ibb.co/84sRtgGc/Frame-58270-1.png"
              alt="Logo"
              style={{ height: '40px', width: 'auto' }}
            />
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Body */}
      <Box sx={{ display: 'flex', pt: 8, height: 'calc(100vh - 64px)' }}>
        {/* Left Panel */}
        <Box sx={{ width: '20%', padding: 2, bgcolor: '#f9f9f9' }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Details Needs to Verify
          </Typography>

          {/* Vertically aligned checkboxes */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {Object.entries(checks).map(([key, value]) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={value}
                    onChange={() => handleCheck(key as keyof typeof checks)}
                  />
                }
                label={key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, str => str.toUpperCase())}
              />
            ))}
          </Box>
        </Box>

        {/* Right Panel */}
        <Box sx={{ width: '100%', padding: 2, textAlign: 'center' }}>
          <Box mt={2} display="flex" justifyContent="center">
            <Button variant="outlined" sx={{ margin: '20px' }} onClick={() => window.location.href = '/capture'}>
              capture
            </Button>
          </Box>

          <Box
            sx={{
              height: '85%',
              padding: '20px',
              backgroundColor: '#eaeaea',
              borderRadius: 2,
              boxShadow: 2,
              overflow: 'hidden',
            }}
          >
            <iframe
              src="https://8x8.vc/vpaas-magic-cookie-cf5217ce8a4048d89baa3f88ab649551/eprverification"
              title="EPR Verification Video"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                borderRadius: '8px',
              }}
              allow="camera; microphone; fullscreen; speaker; display-capture"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
