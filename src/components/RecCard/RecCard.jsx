"use client";
import React from 'react'
import { Container, InfoContainer, ImageContainer, TextContainer, TitleContainer } from "./RecCard.style"
import PropTypes from "prop-types"
import { Fav } from '@/components';
import { shortText } from '@/utils/utils';
import Button from '@mui/material/Button';
import usePopupStore from '@/store/popup';

export default function RecCard({ data }) {
    const triggerPopup = usePopupStore((state) => state.triggerPopup);
    const setPopupContent = usePopupStore((state) => state.setPopupContent);

    if (data === undefined || data === null) return <></>;
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

    const readMoreHandler = () => {
        triggerPopup(1);
        setPopupContent({
            id: idMeal,
            name: strMeal,
            img: strMealThumb,
            category: strCategory,
            instructions: strInstructions,
        });
    }

    return (
        <Container>
            <ImageContainer><img src={strMealThumb || ''} alt={strMeal} /></ImageContainer>
            <InfoContainer>
                <div>
                    <div className="row-between">
                        <TitleContainer>{strMeal}</TitleContainer>
                        <Fav data={data} />
                    </div>
                    <h4>{strCategory}</h4>
                </div>
                <TextContainer>{shortText(strInstructions, 100)}</TextContainer>
                <Button onClick={readMoreHandler} variant="contained" style={style}>Read more</Button>
            </InfoContainer>
        </Container>
    )
}

RecCard.propTypes = {
    data: PropTypes.object,
}
