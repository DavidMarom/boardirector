"use client";
import React, { useEffect, useState } from 'react'
import { Container } from "./Fav.style.ts"
import PropTypes from "prop-types"
import useRecipesStore from "@/store/recipes.js"

export default function Fav({ data }) {
    const setFavorites =        useRecipesStore((state) => state.setFavorites)

    const favorites = useRecipesStore(state => state.favorites)



    const handleToggle = () => {
        console.log(favorites)
        if (favorites.includes(data.idMeal)) {
            setFavorites(favorites.filter(fav => fav !== data.idMeal))
        } else {
            setFavorites([...favorites, data.idMeal])
        }


    }

    return (
        <Container>
            <img onClick={handleToggle} src="/icons/star-full.svg" alt="star" />
        </Container >
    )
}

Fav.propTypes = {
    data: PropTypes.object.isRequired
}