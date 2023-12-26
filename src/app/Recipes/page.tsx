"use client";

import React, { useEffect, useState } from 'react';
import { RecCard } from '@/components';
import { getRecipes } from '@/services/recipes';
import { Recipe } from '@/utils/types';
import { setToStorage, getFromStorage } from '@/utils/utils';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (getFromStorage("recipes") != null) { setRecipes(getFromStorage("recipes") ?? "") }
        const lastFetch = getFromStorage('lastFetch');
        if (lastFetch === null) { setToStorage("lastFetch", Date.now()) }
        if (Date.now() - parseInt(lastFetch ?? "") > 1000 || getFromStorage("recipes") === null) {
            getRecipes().then((data) => {
                setToStorage("recipes", data.meals);
                setToStorage("lastFetch", Date.now());
                setRecipes(data.meals);
            });
        }

    }, []
    );

    return (
        <>
            <div className="grid-container">
                {recipes.map((item: Recipe, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>
        </>
    );
}

export default RecipesPage;