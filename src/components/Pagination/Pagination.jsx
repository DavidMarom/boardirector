"use client";
import React from 'react'
import { Container } from "./Pagination.style"
import PropTypes from "prop-types"
export default function Pagination({
    page,
    setPage
}) {

    return (
        <Container>
            <button onClick={() => { if (page > 0) setPage(page - 1) }}>← Previous</button>
            <h2>Page {page + 1}</h2>
            <button onClick={() => { if (page < 30) { setPage(page + 1) } }}>Next →</button>
        </Container>
    )
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
}
