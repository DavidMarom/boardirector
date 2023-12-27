"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Container, Button } from "./PageNav.style.ts"
import PropTypes from "prop-types"
import { StyleSheetManager } from 'styled-components';

export default function PageNav() {
    const router = useRouter();
    const [page, setPage] = useState(1);
    return (
        <Container>
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'active'}>

                <Button
                    active={page === 1 ? 'true' : 'false'}
                    onClick={() => {
                        setPage(1)
                        router.push('/Recipes')
                    }}>
                    Recipes
                </Button>
            </StyleSheetManager>
            
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'active'}>
                <Button
                    active={page === 2 ? 'true' : 'false'}
                    onClick={() => {
                        setPage(2);
                        router.push('/Favorites')
                    }}>
                    Favorites
                </Button>
            </StyleSheetManager>
        </Container >
    )
}

Button.propTypes = {
    active: PropTypes.string,
    onClick: PropTypes.func,
}