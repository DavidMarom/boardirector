"use client";

import React, { useEffect, useState } from 'react';
import { RecCard } from '@/components';
import { getAllRecipes } from '@/services/recipes';
import { Recipe } from '@/utils/types';
import { setToStorage, getFromStorage, dataExpired } from '@/utils/utils';
import useRecipesStore from '@/store/recipes';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [sortedRecipes, setSortedRecipes] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 16;
    const selectedCategory = useRecipesStore((state) => state.selectedCategory);

    useEffect(() => {
        if (getFromStorage("recipes") != null) { setRecipes(getFromStorage("recipes") ?? "") }
        const lastFetch = getFromStorage('lastFetch');
        if (lastFetch === null) { setToStorage("lastFetch", Date.now()) }
        if (dataExpired() || getFromStorage("recipes") === null) {
            getAllRecipes().then((data): void => {
                setToStorage("recipes", data);
                setToStorage("lastFetch", Date.now());
                setRecipes(data);
                setSortedRecipes(data.slice(page * 10, (page * 10) + itemsPerPage));
            });
        }
    }, []
    );

    useEffect(() => { setSortedRecipes(recipes.filter((item: Recipe) => item?.strCategory === selectedCategory)) }, [selectedCategory]);
    useEffect(() => { setSortedRecipes(recipes.slice(page * 10, (page * 10) + itemsPerPage)) }, [page]);

    return (
        <>
            <div className="grid-container">
                {sortedRecipes && sortedRecipes.map((item: Recipe, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>

            <div className='pagination-bar'>
                <button onClick={() => { if (page > 0) setPage(page - 1) }}>← Previous</button>
                <h2>Page {page + 1}</h2>
                <button onClick={() => { if (page < 30) { setPage(page + 1) } }}>Next →</button>
            </div >
        </>
    );
}

export default RecipesPage;