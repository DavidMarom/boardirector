"use client";
import React from 'react'
import { Container, InfoContainer, ImageContainer, TextContainer, TitleContainer } from "./RecCard.style"
import PropTypes from "prop-types"
import { Fav } from '@/components';
import { shortText } from '@/utils/utils';
import Button from '@mui/material/Button';

export default function RecCard({ data }) {
    const { strMeal, strMealThumb, strCategory, strInstructions, idMeal } = data;
    const style = {
        color: '#ffffff',
        backgroundColor: 'var(--primary)',
        borderRadius: '3px',
        fontSize: '.5rem',
        textTransform: 'none',
        height: '.9rem',
        width: 'fit-content',
    };

    return (
        <Container>
            <ImageContainer><img src={strMealThumb || ''} alt={strMeal} /></ImageContainer>
            <InfoContainer>
                <div>
                    <div className="row-between">
                        <TitleContainer>{strMeal}</TitleContainer>
                        <Fav />
                    </div>
                    <h4>{strCategory}</h4>
                </div>
                <TextContainer>{shortText(strInstructions, 100)}</TextContainer>
                <Button variant="contained" style={style}>Read more</Button>
            </InfoContainer>
        </Container>
    )
}

RecCard.propTypes = {
    data: PropTypes.object,
}
