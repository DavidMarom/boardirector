"use client";
import React from 'react'
import { Container, InfoContainer } from "./RecCard.style"
import PropTypes from "prop-types"
import { Image } from 'next/image';

export default function RecCard({ data }) {
    const { strMeal, strMealThumb, strCategory, strInstructions, idMeal } = data;
    return (
        <Container>
            <img src={strMealThumb} alt={strMeal} />
            <InfoContainer>
                <h3>{strMeal}</h3>
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
