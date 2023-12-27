"use client";

import React, { useEffect, useState } from 'react';
import { RecCard, Pagination } from '@/components';
import { getAllRecipes } from '@/services/recipes';
import { RecipeType } from '@/utils/types';
import { setToStorage, getFromStorage, dataExpired } from '@/utils/utils';
import useRecipesStore from '@/store/recipes';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [sortedRecipes, setSortedRecipes] = useState([]);
    const [page, setPage] = useState(0);
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

    useEffect(() => { setSortedRecipes(recipes.filter((item: RecipeType) => item?.strCategory === selectedCategory)) }, [selectedCategory]);
    useEffect(() => { setSortedRecipes(recipes.slice(page * 10, (page * 10) + itemsPerPage)) }, [page]);

    return (
        <>
            <div className="grid-container">
                {sortedRecipes && sortedRecipes.map((item: RecipeType, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>

            <Pagination page={page} setPage={setPage} />
        </>
    );
}

export default RecipesPage;