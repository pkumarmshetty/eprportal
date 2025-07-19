

'use client';
import React from 'react';
import {
    Box,
    Typography,
    Paper,
    Divider,
    Stack
} from '@mui/material';
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
                                        <Typography fontWeight={500}>27ABCDE1234F1Z5</Typography>
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
                                        <Typography fontWeight={500}>ABC Polymers Pvt. Ltd</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Trade Name</Typography>
                                        <Typography fontWeight={500}>ABC Plastics</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Type of Business</Typography>
                                        <Typography fontWeight={500}>Manufacturer</Typography>
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
                                        <Typography fontWeight={500}>Ramesh Kumar, Director</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Mobile Number</Typography>
                                        <Typography fontWeight={500}>9876543210</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">PAN Details</Typography>
                                        <Typography fontWeight={500}>ABCDE1234Z</Typography>
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
                                        <Typography fontWeight={500}>Document.PDF</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Exemption for Micro & Small Brand-Owners </Typography>
                                        <Typography fontWeight={500}>Document.PDF</Typography>
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
                            <Typography
                                variant="h6"
                                fontWeight="600"
                                sx={{ color: '#1A237E' }}
                            >
                                AI Confidence Score
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
                                EPR Registration
                            </Typography>
                            <Typography color="green" variant="body2">✔ Valid application type</Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary" gutterBottom>
                                Company Details
                            </Typography>
                            <Typography color="green" variant="body2">✔ All company details are consistent</Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary" gutterBottom>
                                Authorized Person Details
                            </Typography>
                            <Typography color="error" variant="body2">
                                ❌ PAN field is repeated or invalid
                            </Typography>
                            <Typography color="warning.main" variant="body2">
                                ⚠ Suggestion: Enter valid 10-character PAN
                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary" gutterBottom>
                                Document Uploads
                            </Typography>
                            <Typography variant="body2">
                                ⚠ MSME exemption is usually not for Recyclers
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </AdminDashboard>
    );
}
