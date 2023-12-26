"use client";

import React, { useEffect, useState } from 'react';
import { RecCard } from '@/components';
import { getRecipes } from '@/services/recipes';
import { Recipe } from '@/utils/types';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes().then((res) => {
            setRecipes(res.meals);
        })
    }, [])


    return (
        <>
            <div className="grid-container">
                {recipes.map((item: Recipe, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>
        </>
    );
}

export default RecipesPage;