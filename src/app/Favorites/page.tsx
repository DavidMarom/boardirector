"use client";
import React, { useEffect, useState } from 'react';
import { RecipeType } from '@/utils/types';
import { RecCard } from '@/components';
import useRecipesStore from '@/store/recipes';
import { getFromStorage } from '@/utils/utils';

const FavoritesPage = () => {
    const [sortedFav, setSortedFav] = useState([]);
    const favorites = useRecipesStore(state => state.favorites)

    useEffect(() => {
        const fav = getFromStorage('recipes').filter((fav: RecipeType) => favorites.includes(fav?.idMeal))
        setSortedFav(fav)
    }, [])

    return (
        <>
            <div className="grid-container">
                {sortedFav.map((item: RecipeType, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>
        </>
    );
}

export default FavoritesPage;
