"use client";
import React from 'react'
import { Container, FirstRow, SecondRow } from "./Header.style"
import Link from "next/link"
import PropTypes from "prop-types"

export default function Header({

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


Header.propTypes = {

}
