'use client';
import React from 'react'
import PropTypes from "prop-types"
import { Container } from "./Card01.style"
import { StyleSheetManager } from 'styled-components';

export default function Card01({
    width = '100%',
    height = 140,
    background = '#ffffff',
    children,
    direction = 'row',
    justifyContent = 'space-between',
}) {

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'justifyContent'}>
            <Container
                width={width}
                height={height}
                background={background}
                direction={direction}
                justifyContent={justifyContent}
            >
                {children}
            </Container>
        </StyleSheetManager>
    )
}

Card01.propTypes = {
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node,
    direction: PropTypes.string,
    justifyContent: PropTypes.string,
}
