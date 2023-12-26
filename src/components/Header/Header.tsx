"use client";
import React, { useState, useEffect } from 'react'
import { Container, FirstRow } from "./Header.style"
import { PageNav } from "@/components"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CategoryType } from '@/utils/types';
import { getAllCategories } from '@/services/recipes';
import useRecipesStore from '@/store/recipes'

export default function Header() {
    const [categories, setCategories] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const setSelectedCategory = useRecipesStore((state) => state.setSelectedCategory)

    useEffect(() => { getAllCategories().then((res: any) => { setCategories(res.categories.map((category: CategoryType) => category.strCategory)) }) }, [])

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
        setSelectedCategory(event.target.value);
    };

    return (
        <Container>
            <FirstRow><h1>Recipes</h1></FirstRow>

            <FormControl sx={{ width: 300 }}>
                <Select value={selectedValue} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Select' }} sx={{ height: 40 }}>
                    <MenuItem value="" disabled>Select an option</MenuItem>
                    {categories.map((category, index) => (<MenuItem key={index} value={category}>{category}</MenuItem>))}
                </Select>
            </FormControl>
            <PageNav />
        </Container>
    )
}
