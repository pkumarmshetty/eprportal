
'use client';

import DashboardComponent from '@/components/DashboardComponent';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();
    const handleClick = () => {
         sessionStorage.setItem('showQRCode', 'true');
         
        // Open external link
        window.open(
            '/Remote',
            '_blank'
        );

        // Navigate to TrackPageB
        router.push('/TrackPageB');
    };

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
                                <CheckCircleIcon fontSize="large" />
                                <Typography fontWeight="bold">Step 3</Typography>
                                <Typography fontSize="small">Verification Pending</Typography>
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
                                <CheckCircleIcon fontSize="large" />
                                <Typography fontWeight="bold">Step 4</Typography>
                                <Typography fontSize="small">Approved</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '0px',

                }}
            >
                <span>
                    <img
                        src="img8.svg"
                        alt="tracker"
                        style={{ maxWidth: '100vw', height: 'auto', padding: '20px' }}
                    />
                </span>
                <span>
                    <img
                        src="img9.svg"
                        alt="tracker"
                        style={{ maxWidth: '100vw', height: 'auto', padding: '20px' }}
                    />
                    <div
                        onClick={handleClick}
                        style={{
                            backgroundColor: 'black',
                            width: '300px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            position: 'relative',
                            top: '-220px',
                            right: '-50px',
                            borderRadius: '20px',
                            color: 'white',
                        }}
                    >
                        <span
                            style={{
                                backgroundColor: 'black',
                                width: '300px',
                                height: '48px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                fontSize: '16px',
                                borderRadius: '4px',
                            }}
                        >
                            Start Remote Verification
                        </span>
                    </div>
                    {/* <div
                        style={{
                            backgroundColor: 'black', // Green color (Material UI success)
                            width: '300px',             // Set desired height
                            display: 'flex',             // Center the link
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            position: 'relative',
                            top: '-220px',
                            right: '-50px',
                            borderRadius: '20px',
                            color: 'white',
                        }}
                    >
                        <a
                            href="https://8x8.vc/vpaas-magic-cookie-cf5217ce8a4048d89baa3f88ab649551/eprverification"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: 'black',    // Material UI green
                                width: '300px',
                                height: '48px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                fontSize: '16px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                

                            }}
                        >
                            Start Remote Verification
                        </a>

                    </div> */}
                </span>


            </div>



        </DashboardComponent>
    );
}

export default Page;

