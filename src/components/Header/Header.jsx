"use client";
import React from 'react'

import { Container, FirstRow, SecondRow } from "./Header.style"
import { PageNav } from "@/components"
import Link from "next/link"

export default function Header({

}) {
    return (
        <Container>
            <FirstRow><h1>Recipes</h1></FirstRow>
            <SecondRow><h2>search</h2></SecondRow>
            <PageNav />

        </Container>
    )
}


Header.propTypes = {

}
