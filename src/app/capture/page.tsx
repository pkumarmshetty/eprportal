
'use client';

import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Grid,
    Card,
    CardMedia,
    Stack,
    Button,
} from '@mui/material';

function Page() {
    const mondayDate = new Date();
    mondayDate.setDate(mondayDate.getDate() - ((mondayDate.getDay() + 6) % 7));
    const formattedDate = mondayDate.toLocaleDateString('en-IN');

    return (
        <Box sx={{ fontFamily: 'Inter, sans-serif' }}>
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

            {/* Main Content */}
            <Box display="flex" pt={10} p={4} gap={4}>
                {/* Left - Checklist */}
                <Box sx={{ width: '250px' }}>
                    <Typography variant="h6" fontWeight={600} mb={2}>Details Verified</Typography>
                    <Stack spacing={1}>
                        <Typography fontSize="15px" fontWeight={500}><span style={{ color: 'green' }}>✔</span> Facility Photo</Typography>
                        <Typography fontSize="15px" fontWeight={500}><span style={{ color: 'green' }}>✔</span> Capture Entrance Image</Typography>
                        <Typography fontSize="15px" fontWeight={500}><span style={{ color: 'green' }}>✔</span> GPS Location</Typography>
                        <Typography fontSize="15px" fontWeight={500}><span style={{ color: 'green' }}>✔</span> Machine Photo</Typography>
                        <Typography fontSize="15px" fontWeight={500}><span style={{ color: 'green' }}>✔</span> Electricity Meter Photo</Typography>
                    </Stack>
                </Box>

                {/* Right - Image Cards (3 per row) */}
                <Box flex={1}>
                    <Typography variant="h6" fontWeight={600} mb={2}>Preview Images</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345, height: '180px', position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="img15.png"
                                    alt="Image 1"
                                />
                                <Box sx={{ position: 'absolute', bottom: 8, left: 16, color: 'white' }}>
                                    <Typography fontSize="13px">Latitude: 12.9716° N, Longitude: 77.5946° E</Typography>
                                    <Typography fontSize="13px">Date: {formattedDate}</Typography>
                                </Box>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345, height: '180px', position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="img16.png"
                                    alt="Image 2"
                                />
                                <Box sx={{ position: 'absolute', bottom: 8, left: 16, color: 'white' }}>
                                    <Typography fontSize="13px">Latitude: 28.7041° N, Longitude: 77.1025° E</Typography>
                                    <Typography fontSize="13px">Date: {formattedDate}</Typography>
                                </Box>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345, height: '180px', position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="img17.png"
                                    alt="Image 3"
                                />
                                <Box sx={{ position: 'absolute', bottom: 8, left: 16, color: 'white' }}>
                                    <Typography fontSize="13px">Latitude: 19.0760° N, Longitude: 72.8777° E</Typography>
                                    <Typography fontSize="13px">Date: {formattedDate}</Typography>
                                </Box>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345, height: '180px', position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="img18.png"
                                    alt="Image 4"
                                />
                                <Box sx={{ position: 'absolute', bottom: 8, left: 16, color: 'white' }}>
                                    <Typography fontSize="13px">Latitude: 13.0827° N, Longitude: 80.2707° E</Typography>
                                    <Typography fontSize="13px">Date: {formattedDate}</Typography>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Buttons */}
                    <Stack direction="row" mt={4} spacing={2}>
                       
                        <Button
                            onClick={()=>window.location.href = '/FlowDashboardFinal'}
                            variant="contained"
                            sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}
                        >
                            Submit Details
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default Page;
