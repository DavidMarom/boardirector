'use client'

import React from 'react'
import { Popup, Card01 } from '../index'
import usePopupStore from '../../store/popup';

export const Popup01 = () => {
    const triggerPopup = usePopupStore((state) => state.triggerPopup);
    const content = usePopupStore((state) => state.content);

    return (
        <Popup >
            <Card01 width='500px' height='99vh' direction='column'>
                    <button onClick={() => {triggerPopup(0)}}>X</button>
                    <img src={content.img} alt={content.name} />
                    <p>{content.name}</p>
                    <p>{content.category}</p>
                    <p>{content.instructions}</p>


            </Card01>
        </Popup>
    )
}