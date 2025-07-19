

'use client';
import React from 'react';
import {
    Box,
    Typography,
    Paper,
    Divider,
    Stack
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import AdminDashboard from '@/components/AdminDashboard';

export default function Page() {
    return (
        <AdminDashboard>
            <Box p={4} sx={{ fontFamily: 'Inter, sans-serif' }}>
                <Typography
                    variant="h5"
                    fontWeight="700"
                    gutterBottom
                    sx={{ color: '#1D1B20' }}
                >
                    Application Details
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 3,
                        flexWrap: 'wrap',
                    }}
                >
                    {/* LEFT CARD */}
                    <Box
                        sx={{
                            flex: '1 1 50%',
                            p: 3,
                            borderRadius: '16px',
                            backgroundColor: '#fff',
                            boxShadow: '0px 6px 16px rgba(0,0,0,0.06)',
                            border: '1px solid #E0E0E0',
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="600"
                            gutterBottom
                            sx={{ color: '#333', fontFamily: 'Inter' }}
                        >
                            Registration Type
                        </Typography>
                        <Divider sx={{ mb: 3 }} />

                        <Stack spacing={3}>
                            {/* Registration Type */}
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                                    Registration Type
                                </Typography>
                                <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">GST Number</Typography>
                                        <Typography fontWeight={500}>24AAACC1206D1ZM</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Application Type</Typography>
                                        <Typography fontWeight={500}>Recycler</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Category Type</Typography>
                                        <Typography fontWeight={500}>Plastic Waste Management</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Company Details */}
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                                    Company Details
                                </Typography>
                                <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Legal Name</Typography>
                                        <Typography fontWeight={500}>Pavan Pvt Ltd</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Trade Name</Typography>
                                        <Typography fontWeight={500}>Pavan Brand</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Type of Business</Typography>
                                        <Typography fontWeight={500}>Manufacturer</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Company PAN Card Number*</Typography>
                                        <Typography fontWeight={500}>ABCDE1234F</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Company CIN Number *</Typography>
                                        <Typography fontWeight={500}>U12345KA2021PTC123456</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Authorized Person */}
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                                    Authorized Person Details
                                </Typography>
                                <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Name & Designation</Typography>
                                        <Typography fontWeight={500}>John Doe - Director</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Mobile Number</Typography>
                                        <Typography fontWeight={500}>9876543210</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">PAN Details</Typography>
                                        <Typography fontWeight={500}>ABCDE1234F</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                                    Documents
                                </Typography>
                                <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Industry Category
                                        </Typography>
                                        <Typography fontWeight={500}> <DownloadIcon sx={{ fontSize: 20 }} />Document.PDF</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Exemption for Micro & Small Brand-Owners </Typography>
                                        <Typography fontWeight={500}> <DownloadIcon sx={{ fontSize: 20 }} />Document.PDF</Typography>
                                    </Box>

                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                                   Additional Details
                                </Typography>
                                <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Year of Commencement of Operations*</Typography>
                                        <Typography fontWeight={500}>10 years</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Status of Compliance with PWM Rules *</Typography>
                                        <Typography fontWeight={500}>Compliant</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Thickness of Plastic Packaing*</Typography>
                                        <Typography fontWeight={500}>60 microns</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>

                    {/* RIGHT PANEL */}
                    <Box sx={{ flex: '1 1 30%' }}>
                        <Paper
                            variant="outlined"
                            sx={{
                                p: 3,
                                borderRadius: '16px',
                                backgroundColor: '#F9FAFB',
                                fontFamily: 'Inter',
                            }}
                        >
                            <button
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    padding: '10px 20px',
                                    margin:'10px 0px',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                }}
                                onClick={() => window.open(
                                    '/AdminTimeLine',
                                    '_blank'
                                )}
                            >
                                Start Remote Verification
                            </button>
                            <Typography
                                variant="h6"
                                fontWeight="600"
                                sx={{ color: '#1A237E' }}
                            >
                                AI Reviewer
                            </Typography>
                            {/* <Typography
                                sx={{
                                    fontSize: '32px',
                                    fontWeight: '700',
                                    mt: 1,
                                    mb: 3,
                                    color: '#1976d2',
                                }}
                            >
                                82%
                            </Typography> */}

                            <Divider sx={{ mb: 2 }} />

                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary" gutterBottom>
                                Application Type
                            </Typography>
                            <Typography color="green" variant="body2">✔ Valid registration type selected (Recycler – Plastic Waste)</Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary" gutterBottom>
                                Company Details
                            </Typography>
                            <Typography color="green" variant="body2">✔ Company name, CIN, GSTIN, and address verified and consistent</Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary" gutterBottom>
                                Authorized Person Details
                            </Typography>
                            <Typography color="success" variant="body2">
                                ✔  All mandatory fields (name, designation, ID proof, contact details) are complete and verified.
                            </Typography>
                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary" gutterBottom>
                                Document Uploads
                            </Typography>
                            <Typography color="success" variant="body2">
                                ✔ All required documents (Trade License, Pollution Control Board NOC, Plant Photos) uploaded successfully and verified

                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary" gutterBottom>
                                Compliance Validation
                            </Typography>
                            <Typography color="success" variant="body2">
                                ✔  GSTIN verified via GSTN API.
                            </Typography>
                            <Typography color="success" variant="body2">
                                ✔  Plant location verified by category cell(GIS verified).
                            </Typography>
                            <Typography color="success" variant="body2">
                                ✔ Recycling capacity and operational details validated successfully.
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </AdminDashboard>
    );
}
