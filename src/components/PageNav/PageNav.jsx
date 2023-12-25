"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Container, Button } from "./PageNav.style"

export default function PageNav({ }) {
    const router = useRouter();
    const [page, setPage] = useState(1);
    return (
        <Container>

            <Button
                active={page === 1}
                onClick={() => {
                    setPage(1)
                    router.push('/Recipes')
                }}>
                Recipes</Button>

            <Button
                active={page === 2}
                onClick={() => {
                    setPage(2);
                    router.push('/Favorites')
                }}>
                Favorites</Button>
        </Container >
    )
}
