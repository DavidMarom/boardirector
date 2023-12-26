"use client";
import React, { useState } from 'react'
import { Container, FirstRow } from "./Header.style"
import { PageNav } from "@/components"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useRecipesStore from '@/store/recipes';


export default function Header() {
    const [selectedValue, setSelectedValue] = useState('');
    const categories = useRecipesStore((state) => state.categories);

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

                    {categories.map((category, index) => (
                        <MenuItem key={index} value={category}>{category}</MenuItem>
                    ))}

                </Select>
            </FormControl>
            <PageNav />
        </Container>
    )
}

Header.propTypes = {

}
