
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
                                <CheckCircleIcon color='success' fontSize="large" />
                                <Typography fontWeight="bold">Step 3</Typography>
                                <Typography fontSize="small">Verification Completed</Typography>
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
                                <CheckCircleIcon color='success' fontSize="large" />
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
                        src="img21.svg"
                        alt="tracker"
                        style={{ maxWidth: '100vw', height: 'auto', padding: '20px' }}
                    />
                    <div style={{ position: 'relative', top: '-260px', left: '50px' }}>
                        <a
                            href="https://epr.demodpg.com/01K0HM2J1H587XBJ5WP7MS3TRT"
                            download
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#333',
                                    },
                                }}
                            >
                                Download Registration Certificate
                            </Button>
                        </a>
                    </div>
                </span>


            </div>



        </DashboardComponent>
    );
}

export default Page;

