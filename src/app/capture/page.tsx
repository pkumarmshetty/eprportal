'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Checkbox,
    FormControlLabel,
    Stack,
    Button,
    CardActionArea,
    CardActions,
} from '@mui/material';

const checklist = [
    'Facility Photo',
    'Capture Entrance Image',
    'GPS Location',
    'Machine Photo',
    'Electricity Meter Photo',
];

const images = [
    { label: 'Entrance Image', url: 'https://via.placeholder.com/300x160.png?text=Entrance+Image', gps: '12.9716° N, 77.5946° E' },
    { label: 'Facility Image', url: 'https://via.placeholder.com/300x160.png?text=Facility+Image', gps: '28.7041° N, 77.1025° E' },
    { label: 'Electricity Meter Image', url: 'https://via.placeholder.com/300x160.png?text=Electricity+Meter', gps: '19.0760° N, 72.8777° E' },
    { label: 'Evaluation Map', url: 'https://via.placeholder.com/300x160.png?text=Evaluation+Map', gps: '13.0827° N, 80.2707° E' },
];

const getMondayDate = () => {
    const now = new Date();
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
    return monday.toLocaleDateString('en-IN');
};

function Page() {
    const [checked, setChecked] = useState(['Machine Photo']);

    const handleToggle = (label: string) => {
        setChecked((prev) =>
            prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
        );
    };

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
                    <Typography variant="h6" fontWeight={600} mb={2}>Details Needs to Verify</Typography>
                    <Stack spacing={1}>
                        {checklist.map((item) => (
                            <FormControlLabel
                                key={item}
                                control={
                                    <Checkbox
                                        checked={checked.includes(item)}
                                        onChange={() => handleToggle(item)}
                                    />
                                }
                                label={item}
                            />
                        ))}
                    </Stack>
                </Box>

                {/* Right - Images */}
                <Box flex={1}>
                    <Typography variant="h6" fontWeight={600} mb={2}>Preview Images</Typography>
                    <Grid container spacing={2}>
                        <Card sx={{ maxWidth: 345,height:'205px' }}>

                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/5hmqD5Kp/online.jpg"
                                alt="green iguana"
                            />
                            <div style={{position:'relative',top:'-120px'}}>
                                <Typography variant="subtitle2" fontWeight={500}>
                                    <iframe
                                        width="150px"
                                        height="100"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src={`https://www.google.com/maps?q=12.9716,77.5946&z=15&output=embed`}
                                        allowFullScreen
                                    ></iframe>
                                </Typography>
                                <span style={{color:'white'}}>Date : 21/7/2025</span>
                            </div>

                        </Card>
                        <Card sx={{ maxWidth: 345,height:'205px' }}>

                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/5hmqD5Kp/online.jpg"
                                alt="green iguana"
                            />
                            <div style={{position:'relative',top:'-120px'}}>
                                <Typography variant="subtitle2" fontWeight={500}>
                                    <iframe
                                        width="150px"
                                        height="100"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src={`https://www.google.com/maps?q=12.9716,77.5946&z=15&output=embed`}
                                        allowFullScreen
                                    ></iframe>
                                </Typography>
                                <span style={{color:'white'}}>Date : 21/7/2025</span>
                            </div>

                        </Card>

                        <Card sx={{ maxWidth: 345,height:'205px' }}>

                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/5hmqD5Kp/online.jpg"
                                alt="green iguana"
                            />
                            <div style={{position:'relative',top:'-120px'}}>
                                <Typography variant="subtitle2" fontWeight={500}>
                                    <iframe
                                        width="150px"
                                        height="100"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src={`https://www.google.com/maps?q=12.9716,77.5946&z=15&output=embed`}
                                        allowFullScreen
                                    ></iframe>
                                </Typography>
                                <span style={{color:'white'}}>Date : 21/7/2025</span>
                            </div>

                        </Card>

                        <Card sx={{ maxWidth: 345,height:'205px' }}>

                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/5hmqD5Kp/online.jpg"
                                alt="green iguana"
                            />
                            <div style={{position:'relative',top:'-120px'}}>
                                <Typography variant="subtitle2" fontWeight={500}>
                                    <iframe
                                        width="150px"
                                        height="100"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src={`https://www.google.com/maps?q=12.9716,77.5946&z=15&output=embed`}
                                        allowFullScreen
                                    ></iframe>
                                </Typography>
                                <span style={{color:'white'}}>Date : 21/7/2025</span>
                            </div>

                        </Card>

                    </Grid>

                    {/* Buttons */}
                    <Stack direction="row" mt={4} spacing={2}>
                        <Button variant="outlined">View only</Button>
                        <Button variant="contained" color="success">Submit Details</Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default Page;
