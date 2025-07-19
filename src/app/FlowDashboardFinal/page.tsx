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
  
     
        <Box sx={{ mt: 4 }}>
      <h3 style={{padding:'20px 0px', fontWeight:'bold'}}>Registrations</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#F5F5F5' }}>
               <TableCell>Company  Name</TableCell>
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
              <TableCell sx={{ color: '#757575' }}>Pavan Pvt Ltd</TableCell>
              <TableCell sx={{ color: '#757575' }}>APP0001</TableCell>
              <TableCell sx={{ color: '#757575' }}>Recycler</TableCell>
              <TableCell sx={{ color: '#757575' }}>21-07-2025</TableCell>
              <TableCell sx={{ color: '#757575' }}>Private Ltd</TableCell>
              <TableCell sx={{ color: '#757575' }}>Approved</TableCell>
              <TableCell>
                <Button size="small" variant="outlined" onClick={() => router.push('/Registrations')}>View</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#757575' }}>unify Pvt Ltd</TableCell>
              <TableCell sx={{ color: '#757575' }}>APP0002</TableCell>
              <TableCell sx={{ color: '#757575' }}>Recycler</TableCell>
              <TableCell sx={{ color: '#757575' }}>21-08-2025</TableCell>
              <TableCell sx={{ color: '#757575' }}>LLP</TableCell>
              <TableCell sx={{ color: '#757575' }}>Approved</TableCell>
              <TableCell>
                <Button size="small" variant="outlined" onClick={() => router.push('/Registrations')}>View</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#757575' }}>logify Pvt Ltd</TableCell>
              <TableCell sx={{ color: '#757575' }}>APP0003</TableCell>
              <TableCell sx={{ color: '#757575' }}>Recycler</TableCell>
              <TableCell sx={{ color: '#757575' }}>21-07-2025</TableCell>
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
