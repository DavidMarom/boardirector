"use client";
import React, { useEffect, useState } from 'react'
import { Container } from "./Fav.style.ts"
import PropTypes from "prop-types"
import useRecipesStore from "@/store/recipes.js"

export default function Fav({ data }) {
    const setFavorites = useRecipesStore((state) => state.setFavorites)
    const favorites = useRecipesStore(state => state.favorites)
    const [isFavorite, setIsFavorite] = useState(false)

    const handleToggle = () => {
        if (favorites.includes(data.idMeal)) {
            setFavorites(favorites.filter(fav => fav !== data.idMeal))
            setIsFavorite(false)
        } else {
            setFavorites([...favorites, data.idMeal])
            setIsFavorite(true)
        }
    }

    useEffect(() => {
        if (favorites.includes(data.idMeal)) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }, [])

    return (
        <Container>
            {isFavorite ?
                <img onClick={handleToggle} src="/icons/star-full.svg" alt="star" /> :
                <img onClick={handleToggle} src="/icons/star-blank.svg" alt="star" />}
        </Container >
    )
}

Fav.propTypes = {
    data: PropTypes.object.isRequired
}