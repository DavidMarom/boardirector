'use client'

import React from 'react'
import { Popup, Card01 } from '../index'
import usePopupStore from '../../store/popup';
import { Fav } from '../index'

export const Popup01 = () => {
    const triggerPopup = usePopupStore((state) => state.triggerPopup);
    const content = usePopupStore((state) => state.content);

    return (
        <Popup >
            <Card01 width='600px' height='99vh' direction='column'>
                <div className='row-between'><button onClick={() => { triggerPopup(0) }}>X</button></div>
                <div>
                    <div className='row-between margin-buttom-40'>

                        <div className='image-container'><img src={content.img} alt={content.name} /></div>
                        <div className='rec-text'>
                            <h1>{content.name}</h1>
                            <div className='row-between'>
                                <h2>{content.category}</h2>
                                <Fav data={content} />
                            </div>
                        </div>
                    </div>
                    <h2>Instructions</h2>
                    <p>{content.instructions}</p>
                </div>
                <div />
            </Card01>
        </Popup>
    )
}