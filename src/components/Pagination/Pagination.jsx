"use client";
import React from 'react'
import { Container } from "./Pagination.style"
import PropTypes from "prop-types"
import { Fav } from '@/components';
import { shortText } from '@/utils/utils';
import Button from '@mui/material/Button';

export default function Pagination() {

    return (
        <Container>
            <button onClick={() => { if (page > 0) setPage(page - 1) }}>← Previous</button>
            <h2>Page {page + 1}</h2>
            <button onClick={() => { if (page < 30) { setPage(page + 1) } }}>Next →</button>
        </Container>
    )
}

RecCard.propTypes = {
}
