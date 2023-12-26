"use client";
import React, { useState } from 'react'
import { Container } from "./Fav.style.ts"
import PropTypes from "prop-types"

export default function Fav() {
    const [page, setPage] = useState(1);
    return (
        <Container>

            <img src="/icons/star-full.svg" alt="star" />

        </Container >
    )
}

Fav.propTypes = {
    
}