"use client";

import React from 'react';
import { RecCard } from '@/components';
import { meal } from "./res"

const data = meal;
const RecipesPage = () => {
    return (
        <>
            <div className="grid-container">
                {data.map((item, index) => <RecCard key={index} data={item} />)}
            </div>
        </>
    );
}

export default RecipesPage;