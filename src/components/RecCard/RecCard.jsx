"use client";
import React from 'react'
import { Container, InfoContainer } from "./RecCard.style"
import PropTypes from "prop-types"
import { Image } from 'next/image';

export default function RecCard({ data }) {
    const { strMeal, strMealThumb, strCategory, strInstructions, idMeal } = data;

    return (
        <Container>
            <img src={strMealThumb || ''} alt={strMeal} />
            <InfoContainer>
                <div className="row-between">
                <h3>{strMeal}</h3>
                <div className='col-start'><img src="/icons/star-full.svg" alt="star" width={20} height={20} /></div>

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
