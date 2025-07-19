'use client'
import DashboardComponent from '@/components/DashboardComponent'
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Modal, TextField, Typography } from '@mui/material';
// import router from 'next/navigation';
import React, { useState } from 'react'

function page() {
  const [loggedInUser, setLoggedInUser] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('Plastic Waste');
  const [open, setOpen] = useState(false);
  const [creditAmount, setCreditAmount] = useState('');
  const [isPiboCetagorySelected, setPiboIsCatagorySelected] = React.useState(true);
  const tabs = ['Plastic Waste', 'eWaste'];

const handleChange = (e) => {
  const value = e.target.value;
  if (value === '' || (Number(value) >= 1 && Number(value) <= 100)) {
    setCreditAmount(value);
  }
};


  const certificateData = [
    'Cat-1 Recycling',
    'Cat-2 Recycling',
    'Cat-3 Recycling',
    'Cat-1 End of Life',
    'Cat-2 End of Life',
    'Cat-3 End of Life',
    'Cat-4 End of Life',
    'Cat-1 Use of Recycled Content',
    'Cat-2 Use of Recycled Content',
    'Cat-3 Use of Recycled Content'
  ];

  const companyData = [
    {
      name: 'Pluto Intero',
      email: 'contact@plutointero.in',
      available: 600,
      blocked: 100,
      transferred: 300,
      total: 1000
    },
    {
      name: 'Rosuni',
      email: 'info@rosuni.in',
      available: 450,
      blocked: 50,
      transferred: 200,
      total: 700
    },
    {
      name: 'ReCircle',
      email: 'support@recircle.in',
      available: 800,
      blocked: 120,
      transferred: 400,
      total: 1320
    },
    {
      name: 'Ecoreco',
      email: 'services@ecoreco.com',
      available: 500,
      blocked: 80,
      transferred: 300,
      total: 880
    },
    {
      name: 'Srichakra Polyplast',
      email: 'hello@srichakra.in',
      available: 700,
      blocked: 90,
      transferred: 250,
      total: 1040
    }
  ];


  const handleTabClick = (key) => {
    setSelectedTab(key);
  }
  // const temp = localStorage.getItem('isOneRegistered')
  // console.log(isPiboCetagorySelected)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCatagorySelect = () => setPiboIsCatagorySelected(false);
  const handleCatagoryDeselect = () => setPiboIsCatagorySelected(true);

  React.useEffect(() => {
    const temp = localStorage.getItem('isOneRegistered');
    const user = localStorage.getItem('loggedInUser');
    console.log('LocalStorage isOneRegistered:', temp);
    console.log('LocalStorage loggedInUser:', user);
    setLoggedInUser(user ? user : '')
  }, []);

  const data = [
    {
      sno: '01',
      catagory: 'Plactic Waste',
      target: '1000',
      available: '600',
      balance: '404'
    },
    {
      sno: '02',
      catagory: 'E-Waste',
      target: '1200',
      available: '500',
      balance: '700'
    },
  ];

  const cardTitles = [
    "E-Waste",
    "Plastic Waste",
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

            <div style={{
              display: 'flex',
              justifyContent: loggedInUser === 'producer' ? 'flex-end' : 'flex-start',
              flex: 1,
            }}>
              <select style={styles.datepicker} defaultValue="2025-2026">
                <option value="" disabled>Select Financial Year</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2021-2022">2021-2022</option>
              </select>
            </div>



            <div style={styles.buttonGroup}>
              {loggedInUser != 'producer' ? <div>
                <button style={styles.actionButton}>Generate Certificate</button>
                <button style={styles.actionButton}>Transfer Certificate</button>
                <button style={styles.actionButton}>Certificate Details</button></div> : <></>}
              <button style={styles.refreshButton}>
                &#x21bb; Refresh{/* Unicode clockwise open circle arrow */}
              </button>
            </div>
          </div>

          <div style={styles.cardsContainer}>
            {cardTitles.map((title, index) => (
              <div key={index} style={styles.walletCard}>
                <div style={styles.cardHeader}>
                  <span style={styles.cardTitle}>{title}</span>
                  <span style={styles.cardSubtitle}>Registered</span>
                </div>
                <div style={styles.cardData}>
                  <p>EPR Target:  {data[index].target}</p>
                  <p>Available EPR Credits: {data[index].available}</p>
                  <p>Balance Credits Required: {data[index].balance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {loggedInUser == 'producer' ? <div>
          <div>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1.5rem',
              borderBottom: '1px solid #ddd',
            }}>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTab(tab)}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: selectedTab === tab ? '#fff' : '#f5f5f5',
                    border: 'none',
                    borderBottom: selectedTab === tab ? '3px solid #20e55bff' : 'none',
                    fontWeight: selectedTab === tab ? 'bold' : 'normal',
                    cursor: 'pointer',
                    color: selectedTab === tab ? '#20e55bff' : '#333',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {selectedTab == 'Plastic Waste' ? <div>
            {!isPiboCetagorySelected ? <Box sx={{ mt: 4 }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#F5F5F5' }}>
                      <TableCell>Certificate Type</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>EPR Certificates (Available)(T)</TableCell>
                      <TableCell>EPR Certificate(Blocked)(T)</TableCell>
                      <TableCell>EPR Certificates Transferred(T)</TableCell>
                      <TableCell>EPR Certificate (Total)(T)</TableCell>
                      <TableCell>Action</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {companyData.map((company, index) => (
                      <TableRow key={index}>
                        <TableCell>{company.name}</TableCell>
                        <TableCell sx={{ color: '#757575' }}>{company.email}</TableCell>
                        <TableCell sx={{ color: '#757575' }}>{company.available}</TableCell>
                        <TableCell sx={{ color: '#757575' }}>{company.blocked}</TableCell>
                        <TableCell sx={{ color: '#757575' }}>{company.transferred}</TableCell>
                        <TableCell sx={{ color: '#757575' }}>{company.total}</TableCell>
                        <TableCell>
                          <Button size="small" variant="outlined" onClick={() => handleOpen()}>Request Credits</Button>
                        </TableCell>
                      </TableRow>
                    ))}

                  </TableBody>
                </Table>
              </TableContainer>
            </Box> : <Box sx={{ mt: 4 }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#F5F5F5' }}>
                      <TableCell>Company Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>EPR Certificates Transferred(T)</TableCell>
                      <TableCell>EPR Certificates Available</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {certificateData.map((type, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <button
                            onClick={() => handleCatagorySelect()}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#1a7636ff',
                              textDecoration: 'underline',
                              fontWeight: 'bold',
                              cursor: 'pointer',
                              padding: 0,
                              font: 'inherit'
                            }}
                          >
                            {type}
                          </button>
                        </TableCell>
                        <TableCell sx={{ color: '#757575' }}>600</TableCell>
                        <TableCell sx={{ color: '#757575' }}>400</TableCell>
                        <TableCell sx={{ color: '#757575' }}>200</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>}
          </div> : <div>

          </div>}
        </div> : <></>}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 420,
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                <strong>My Cat 1 Target</strong>
              </Typography>
              <Typography variant="h6" color="primary">
                100
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                <strong>Available Credits with Rosuni</strong>
              </Typography>
              <Typography variant="h6" color="primary">
                450
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                <strong>How many credits would you like to request?</strong>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter amount"
                type="number"
                value={creditAmount}
                onChange={handleChange}
                slotProps={{
                  input: {
                    min: 1,
                    max: 100,
                  },
                }}
              />

            </Box>

            <Button variant="contained" fullWidth size="large" onClick={handleClose}>
              Request Credits
            </Button>
          </Box>
        </Modal>


      </DashboardComponent>

    </div>
  )
}

export default page