'use client'
import DashboardComponent from '@/components/DashboardComponent'
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
// import router from 'next/navigation';
import React from 'react'

function page() {
  const temp = localStorage.getItem('isOneRegistered')
  console.log(temp)
  const [isRegistered, setIsRegistered] = React.useState();
  const cardTitles = [
    "E-Waste",
    "Plastic Waste",
    "Used Oil Management",
    "Tire Waste Management",
  ];
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    },
    headerRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
    headingGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    subheading: {
      fontSize: '16px',
      color: '#555',
    },
    datepicker: {
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      minWidth: '180px',
      marginLeft: '20px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginLeft: 'auto',
    },
    actionButton: {
      padding: '8px 16px',
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #000',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    refreshButton: {
      padding: '8px 16px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
    },
    walletCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px',
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    cardSubtitle: {
      fontSize: '14px',
      color: '#666',
    },
    cardData: {
      fontSize: '14px',
      lineHeight: '1.6',
    },
  };
  return (
    <div>

      <DashboardComponent >
        <div style={styles.container}>
          <div style={styles.headerRow}>
            <div style={styles.headingGroup}>
              <h1 style={styles.heading}>Wallet</h1>
              <p style={styles.subheading}>Wallet Details and Transaction</p>
            </div>

            <select style={styles.datepicker} defaultValue="">
              <option value="" disabled>Select Financial Year</option>
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2021-2022">2021-2022</option>
              {/* Add more years as needed */}
            </select>

            <div style={styles.buttonGroup}>
              <button style={styles.actionButton}>Generate Certificate</button>
              <button style={styles.actionButton}>Transfer Certificate</button>
              <button style={styles.actionButton}>Certificate Details</button>
              <button style={styles.refreshButton}>
                &#x21bb; {/* Unicode clockwise open circle arrow */}
              </button>
            </div>
          </div>

          <div style={styles.cardsContainer}>
            {cardTitles.map((title, index) => (
              <div key={index} style={styles.walletCard}>
                <div style={styles.cardHeader}>
                  <span style={styles.cardTitle}>{title}</span>
                  <span style={styles.cardSubtitle}>Card (Generic)</span>
                </div>
                <div style={styles.cardData}>
                  <p>Processing Depth: XYZ: 4000</p>
                  <p>Processing Depth: ABC: 4000</p>
                  <p>Total Certificates (XYZ): 45</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {!isRegistered ? <h3>No Record Found</h3> : <Box sx={{ mt: 4 }}>
          <h3 style={{ padding: '20px 0px', fontWeight: 'bold' }}>New Registration</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#F5F5F5' }}>
                  <TableCell>Application ID</TableCell>
                  <TableCell>Application Type</TableCell>
                  <TableCell>Type of Company</TableCell>
                  <TableCell>Created Date</TableCell>
                  <TableCell>Compliance Date</TableCell>
                  {/* <TableCell>EPR Target</TableCell> */}
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: '#757575' }}>APP001</TableCell>
                  <TableCell sx={{ color: '#757575' }}>Registration</TableCell>
                  <TableCell sx={{ color: '#757575' }}>Private Ltd</TableCell>
                  <TableCell sx={{ color: '#757575' }}>2025-07-21</TableCell>
                  <TableCell sx={{ color: '#757575' }}>2026-07-21</TableCell>
                  {/* <TableCell sx={{ color: '#757575' }}>100kg</TableCell> */}
                  <TableCell>
                    <Button size="small" variant="outlined" >View</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>}
      </DashboardComponent>

    </div>
  )
}

export default page