"use client";
import React from 'react'
import { Container } from "./RecCard.style"
import PropTypes from "prop-types"
export default function RecCard({ data }) {
    const { idMeal, strMeal, strCategory, strMealThumb, strInstructions, readMore } = data;
    return (
        <Container>
            <img src={strMealThumb} alt={strMeal} />
            <h3>{strMeal}</h3>
            <h4>{strCategory}</h4>
            <p>{strInstructions}</p>
            <button onClick={() => readMore(idMeal)}>Read More</button>
        </Container>
    )
}

RecCard.propTypes = {
    data: PropTypes.object,
    key: PropTypes.number,
}
