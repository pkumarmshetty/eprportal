"use client"
import AdminDashboard from '@/components/AdminDashboard'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation';

function page() {
     const router = useRouter();
  return (
    <AdminDashboard>
        <h2>Remote Verification</h2>
        <br></br>
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
                <Button size="small" variant="outlined" onClick={() => router.push('/AdminTimeLine')}>Join</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#757575' }}>APP002</TableCell>
              <TableCell sx={{ color: '#757575' }}>Producer</TableCell>
              <TableCell sx={{ color: '#757575' }}>2025-07-16</TableCell>
              <TableCell sx={{ color: '#757575' }}>LLP</TableCell>
              <TableCell sx={{ color: '#757575' }}>Approved</TableCell>
              <TableCell>
                <Button size="small" variant="outlined" onClick={() => router.push('/AdminTimeLine')}>Join</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#757575' }}>APP003</TableCell>
              <TableCell sx={{ color: '#757575' }}>Recycler</TableCell>
              <TableCell sx={{ color: '#757575' }}>2025-07-15</TableCell>
              <TableCell sx={{ color: '#757575' }}>Partnership</TableCell>
              <TableCell sx={{ color: '#757575' }}>Rejected</TableCell>
              <TableCell>
                <Button size="small" variant="outlined" onClick={() => router.push('/AdminTimeLine')}>Join</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </AdminDashboard>
  )
}

export default page