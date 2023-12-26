"use client";
import React from 'react'
import { Container, InfoContainer, ImageContainer } from "./RecCard.style"
import PropTypes from "prop-types"
import { Fav } from '@/components';
import { Image } from 'next/image';

export default function RecCard({ data }) {
    const { strMeal, strMealThumb, strCategory, strInstructions, idMeal } = data;

    return (
        <Container>
            <ImageContainer>
                <img src={strMealThumb || ''} alt={strMeal} />
            </ImageContainer>
            <InfoContainer>
                <div className="row-between">
                    <h3>{strMeal}</h3>
                    <Fav />
                </div>
                <h4>{strCategory}</h4>
                <p>{strInstructions}</p>
                <button onClick={() => readMore(idMeal)}>Read More</button>
            </InfoContainer>

        </Container>
    )


}

RecCard.propTypes = {
    data: PropTypes.object,
}
