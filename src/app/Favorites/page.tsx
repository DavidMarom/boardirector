"use client";
import React, { useState } from 'react';
import { Recipe } from '@/utils/types';
import { RecCard } from '@/components';

const FavoritesPage = () => {
    const [sortedFav, setSortedFav] = useState([]);
    const [page, setPage] = useState(1);

    return (
        <>
            <div className="grid-container">
                {sortedFav && sortedFav.map((item: Recipe, index) => <div key={index}><RecCard data={item} /></div>)}
            </div>

            <div className='pagination-bar'>
                <button onClick={() => { if (page > 0) setPage(page - 1) }}>← Previous</button>
                <h2>Page {page + 1}</h2>
                <button onClick={() => { if (page < 30) { setPage(page + 1) } }}>Next →</button>
            </div >
        </>
    );
}

export default FavoritesPage;
