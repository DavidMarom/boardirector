"use client";

import React, { useEffect, useState } from 'react';
import { RecCard } from '@/components';
import { getRecipesByCategory, getAllRecipes } from '@/services/recipes';
import { Recipe } from '@/utils/types';
import { setToStorage, getFromStorage, dataExpired } from '@/utils/utils';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (getFromStorage("recipes") != null) { setRecipes(getFromStorage("recipes") ?? "") }
        const lastFetch = getFromStorage('lastFetch');
        if (lastFetch === null) { setToStorage("lastFetch", Date.now()) }
        if (dataExpired() || getFromStorage("recipes") === null) {
            getAllRecipes().then((data) => {
                console.log(333,data);
                setToStorage("recipes", data);
                setToStorage("lastFetch", Date.now());
                setRecipes(data);
            });
        }
    }, []
    );

    return (
        <>
            <div className="grid-container">
                {recipes && recipes.map((item: Recipe, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>
        </>
    );
}

export default RecipesPage;