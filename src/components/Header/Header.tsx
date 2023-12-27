"use client";
import React, { useState, useEffect } from 'react'
import { Container, FirstRow } from "./Header.style"
import { PageNav } from "@/components"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { CategoryType } from '@/utils/types';
import { getAllCategories } from '@/services/recipes';
import useRecipesStore from '@/store/recipes'
import usePopupStore from '@/store/popup'

export default function Header() {
    const [categories, setCategories] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const setSelectedCategory = useRecipesStore((state) => state.setSelectedCategory)
    const triggerPopup = usePopupStore((state) => state.triggerPopup)

    const style = {
        color: '#ffffff',
        backgroundColor: 'var(--primary)',
        borderRadius: '3px',
        fontSize: '1rem',
        textTransform: 'none',
        height: '2.5rem',
        width: 'fit-content',
        marginRight: '1rem',
    };

    useEffect(() => { getAllCategories().then((res: any) => { setCategories(res.categories.map((category: CategoryType) => category.strCategory)) }) }, [])

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
        setSelectedCategory(event.target.value);
    };

    const openCreateNew=()=>{
        triggerPopup(2)
    }

    return (
        <Container>
            <FirstRow><h1>Recipes</h1></FirstRow>
            <div className="row-between">
            <FormControl sx={{ width: 300 }}>
                <Select value={selectedValue} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Select' }} sx={{ height: 40 }}>
                    <MenuItem value="" disabled>Select an option</MenuItem>
                    {categories.map((category, index) => (<MenuItem key={index} value={category}>{category}</MenuItem>))}
                </Select>

            </FormControl>
            <Button onClick={openCreateNew} variant="contained" style={{ ...style, textTransform: 'none' }}>Add recipe</Button>

            </div>
            <PageNav />
        </Container>
    )
}
