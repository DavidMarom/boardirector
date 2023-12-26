"use client";

import React, { useEffect, useState } from 'react';
import { RecCard } from '@/components';
import { getRecipesByCategory, getAllRecipes } from '@/services/recipes';
import { Recipe } from '@/utils/types';
import { setToStorage, getFromStorage, dataExpired } from '@/utils/utils';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [sortedRecipes, setSortedRecipes] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (getFromStorage("recipes") != null) { setRecipes(getFromStorage("recipes") ?? "") }
        const lastFetch = getFromStorage('lastFetch');
        if (lastFetch === null) { setToStorage("lastFetch", Date.now()) }
        if (dataExpired() || getFromStorage("recipes") === null) {
            getAllRecipes().then((data): void => {
                setToStorage("recipes", data);
                setToStorage("lastFetch", Date.now());
                setRecipes(data);
                setSortedRecipes(data.slice(page * 10, (page * 10) + 16));
            });
        }
    }, []
    );

    useEffect(() => { setSortedRecipes(recipes.slice(page * 10, (page * 10) + 16)) }, [page]);


    return (
        <>
            <div className="grid-container">
                {sortedRecipes && sortedRecipes.map((item: Recipe, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>
            <div className='row-between margin-top-3rem'>

                <button onClick={() => { if (page > 0) setPage(page - 1) }}>Previous</button>
                <h1>Page {page+1}</h1>
                <button onClick={() => { if (page < (recipes.length / 16)) { setPage(page + 1) } }}>Next</button>
            </div>
        </>
    );

}

export default RecipesPage;