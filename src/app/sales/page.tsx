"use client"
import DashboardComponent from '@/components/DashboardComponent'
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react'

function page() {
    const plasticCategories = [
        'E- Waste Management',
        'Plastic Waste Management',
        'Used Oil Management',
        'Tyre Waste Management',

    ];
    const [category, setCategory] = useState('');
    return (
        <div >
            <DashboardComponent>
                <div>
                    <br></br>
                    <img style={{ zoom: '0.7' }} height="50%" width="98%" src="salesimg2.svg" />
                </div>
                <Box sx={{ width: 500, mt: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel id="plastic-category-label">Plastic Category</InputLabel>
                        <Select
                            labelId="plastic-category-label"
                            id="plastic-category-select"
                            value={category}
                            label="Plastic Category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {plasticCategories.map((item, index) => (
                                <MenuItem key={index} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {category && (
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Selected: {category}
                        </Typography>
                    )}
                </Box>
                <br></br>
                <div>
                    <img style={{ zoom: '0.7' }} width="98%" src="/salesimg1.svg" />
                </div>
            </DashboardComponent>

        </div>
    )
}

export default page