"use client";
import React, { useEffect, useState } from 'react';
import { Recipe } from '@/utils/types';
import { RecCard } from '@/components';
import useRecipesStore from '@/store/recipes';
import { getFromStorage } from '@/utils/utils';

const FavoritesPage = () => {
    const [sortedFav, setSortedFav] = useState([]);
    const [page, setPage] = useState(1);
    const favorites = useRecipesStore(state => state.favorites)
    const recipes = useRecipesStore((state) => state.recipes)
    const itemsPerPage = 16;


    useEffect(() => {
        const fav = getFromStorage('recipes').filter((fav: Recipe) => favorites.includes(fav?.idMeal))
        setSortedFav(fav)
    }, [])

    return (
        <>
            <div className="grid-container">
                {sortedFav && sortedFav.map((item: Recipe, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>

            {/* <div className='pagination-bar'>
                <button onClick={() => { if (page > 0) setPage(page - 1) }}>← Previous</button>
                <h2>Page {page + 1}</h2>
                <button onClick={() => { if (page < 30) { setPage(page + 1) } }}>Next →</button>
            </div > */}
        </>
    );
}

export default FavoritesPage;
