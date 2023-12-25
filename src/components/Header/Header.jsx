"use client";
import React, { useState } from 'react'
import { Container, FirstRow } from "./Header.style"
import { PageNav } from "@/components"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Header() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Container>
            <FirstRow><h1>Recipes</h1></FirstRow>

            <FormControl sx={{ width: 300 }}>
                <Select
                    value={selectedValue}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select' }}
                    sx={{ height: 40 }}
                >
                    <MenuItem value="" disabled>Select an option</MenuItem>
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                </Select>
            </FormControl>
            <PageNav />
        </Container>
    )
}

Header.propTypes = {

}
