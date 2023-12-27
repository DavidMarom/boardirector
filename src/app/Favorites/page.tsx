"use client";
import React, { useEffect, useState } from 'react';
import { RecipeType } from '@/utils/types';
import { RecCard } from '@/components';
import useRecipesStore from '@/store/recipes';
import { getFromStorage } from '@/utils/utils';
import { Pagination } from '@/components';

const FavoritesPage = () => {
    const [sortedFav, setSortedFav] = useState([]);
    const [page, setPage] = useState(0);
    const favorites = useRecipesStore(state => state.favorites)
    const recipes = useRecipesStore((state) => state.recipes)
    const itemsPerPage = 16;


    useEffect(() => {
        const fav = getFromStorage('recipes').filter((fav: RecipeType) => favorites.includes(fav?.idMeal))
        setSortedFav(fav)
    }, [])

    return (
        <>
            <div className="grid-container">
                {sortedFav.map((item: RecipeType, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>

            <Pagination page={page} setPage={setPage} />
        </>
    );
}

export default FavoritesPage;
