'use client';

import AdminDashboard from '@/components/AdminDashboard';
import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import {
  
  Card,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FactoryIcon from '@mui/icons-material/Factory';
import RecyclingIcon from '@mui/icons-material/Recycling';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useRouter } from 'next/navigation';

const cardData = [
  { title: 'Registration', count: 123, icon: <HowToRegIcon fontSize="large" /> },
  { title: 'Producer', count: 75, icon: <FactoryIcon fontSize="large" /> },
  { title: 'Recycler', count: 58, icon: <RecyclingIcon fontSize="large" /> },
  { title: 'Brand Owner', count: 91, icon: <StorefrontIcon fontSize="large" /> },
];

function Page() {
    const router = useRouter();
  return (
    <AdminDashboard>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {cardData.map((card, index) => (
          <Box key={index} sx={{ width: '23.5%' }}>
            <Card
              sx={{
                height: 180,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              {/* Top Row */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: 2,
                }}
              >
                <Box>{card.icon}</Box>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </Box>

              <Box sx={{ flexGrow: 1 }} /> {/* Spacer */}

              {/* Bottom Row */}
              <CardContent
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  paddingTop: 0,
                }}
              >
                <Typography fontWeight="bold">{card.title}</Typography>
                <Box
                  sx={{
                    backgroundColor: '#4caf50',
                    color: '#fff',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  +{card.count}
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
        <Box sx={{ mt: 4 }}>
      <h3 style={{padding:'20px 0px', fontWeight:'bold'}}>New Registration</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#F5F5F5' }}>
              <TableCell>Application ID</TableCell>
              <TableCell>Application Type</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Type of Company</TableCell>
              <TableCell>Current Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: '#757575' }}>APP001</TableCell>
              <TableCell sx={{ color: '#757575' }}>Registration</TableCell>
              <TableCell sx={{ color: '#757575' }}>2025-07-17</TableCell>
              <TableCell sx={{ color: '#757575' }}>Private Ltd</TableCell>
              <TableCell sx={{ color: '#757575' }}>Pending</TableCell>
              <TableCell>
                <Button size="small" variant="outlined" onClick={() => router.push('/Registrations')}>View</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#757575' }}>APP002</TableCell>
              <TableCell sx={{ color: '#757575' }}>Producer</TableCell>
              <TableCell sx={{ color: '#757575' }}>2025-07-16</TableCell>
              <TableCell sx={{ color: '#757575' }}>LLP</TableCell>
              <TableCell sx={{ color: '#757575' }}>Approved</TableCell>
              <TableCell>
                <Button size="small" variant="outlined" onClick={() => router.push('/Registrations')}>View</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#757575' }}>APP003</TableCell>
              <TableCell sx={{ color: '#757575' }}>Recycler</TableCell>
              <TableCell sx={{ color: '#757575' }}>2025-07-15</TableCell>
              <TableCell sx={{ color: '#757575' }}>Pagenership</TableCell>
              <TableCell sx={{ color: '#757575' }}>Rejected</TableCell>
              <TableCell>
                <Button size="small" variant="outlined" onClick={() => router.push('/Registrations')}>View</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </AdminDashboard>
  );
}

export default Page;
