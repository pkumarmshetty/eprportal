
'use client';

import DashboardComponent from '@/components/DashboardComponent';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Page() {
    return (
        <DashboardComponent>
            <Box sx={{ padding: 0 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Application Progress Tracker
                </Typography>

                {/* Outer Container */}
                <Box
                    sx={{
                        position: 'relative',
                        mt: 6,
                        mb: 6,
                        px: 2,
                        backgroundColor: '#f2f2f2',
                        borderRadius: '30px',
                    }}
                >
                    {/* Green Connecting Line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            right: 0,
                            height: '1px',
                            backgroundColor: 'gray',
                            zIndex: 0,
                            transform: 'translateY(-50%)',
                        }}
                    />

                    {/* Steps Wrapper */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        {/* Step 1 */}
                        <Box
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: '#f2f2f2',
                                    p: 2,
                                    borderRadius: 2,
                                    display: 'inline-flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <CheckCircleIcon color="success" fontSize="large" />
                                <Typography fontWeight="bold">Step 1</Typography>
                                <Typography fontSize="small">Details Submitted</Typography>
                            </Box>
                        </Box>

                        {/* Step 2 */}
                        <Box
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: '#f2f2f2',
                                    p: 2,
                                    borderRadius: 2,
                                    display: 'inline-flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <CheckCircleIcon color="success" fontSize="large" />
                                <Typography fontWeight="bold">Step 2</Typography>
                                <Typography fontSize="small">Documents Uploaded</Typography>
                            </Box>
                        </Box>

                        {/* Step 3 */}
                        <Box
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: '#f2f2f2',
                                    p: 2,
                                    borderRadius: 2,
                                    display: 'inline-flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <CheckCircleIcon  color='success'  fontSize="large" />
                                <Typography fontWeight="bold">Step 3</Typography>
                                <Typography fontSize="small">Verification Done</Typography>
                            </Box>
                        </Box>

                        {/* Step 4 */}
                        <Box
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: '#f2f2f2',
                                    p: 2,
                                    borderRadius: 2,
                                    display: 'inline-flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <CheckCircleIcon  fontSize="large" />
                                <Typography fontWeight="bold">Step 4</Typography>
                                <Typography fontSize="small">Approved</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
             <div
                style={{
                    backgroundColor: '#2e7d32', // Green color (Material UI success)
                   width:'300px',             // Set desired height
                    display: 'flex',             // Center the link
                    justifyContent: 'center',
                    alignItems: 'center',
                   cursor: 'pointer'     
                }}
            >
                <a
                    href="https://8x8.vc/vpaas-magic-cookie-cf5217ce8a4048d89baa3f88ab649551/eprverification"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        fontSize: '16px',
                    }}
                >
                    Start Remote Verification
                </a>
            </div>

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                }}
            >
                <img
                    src="https://i.ibb.co/v6W4JHwS/tracker.png"
                    alt="tracker"
                    style={{ maxWidth: '90vw', height: 'auto' }}
                />

            </div>




        </DashboardComponent>
    );
}

export default Page;

