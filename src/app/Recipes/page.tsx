"use client";

import React, { useEffect, useState } from 'react';
import { RecCard } from '@/components';
import { getRecipes } from '@/services/recipes';
import { Recipe } from '@/utils/types';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("recipes") != null) { setRecipes(JSON.parse(localStorage.getItem("recipes") ?? "")) }
        const lastFetch = localStorage.getItem('lastFetch');
        if (lastFetch === null) { localStorage.setItem("lastFetch", Date.now().toString()) }
        if (Date.now() - parseInt(lastFetch ?? "") > 60000) {
            getRecipes().then((data) => {
                localStorage.setItem("recipes", JSON.stringify(data.meals));
                localStorage.setItem("lastFetch", Date.now().toString());
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