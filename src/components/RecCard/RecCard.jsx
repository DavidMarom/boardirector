"use client";
import React from 'react'

import { Container } from "./RecCard.style"
import Link from "next/link"
import PropTypes from "prop-types"

export default function RecCard({
    idMeal,
    strMeal,
    strCategory,
    strMealThumb,
    strInstructions,
    readMore    
}) {
    return (
        <Container>
            <FirstRow><h1>Recipes</h1></FirstRow>
            <SecondRow><h2>search</h2></SecondRow>
            <Link href="/Recipes"><div>Recipes</div></Link>
            <Link href="/Favorites"><div>Favorites</div></Link>

        </Container>
    )
}


RecCard.propTypes = {

}
