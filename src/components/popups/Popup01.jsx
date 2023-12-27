'use client'

import React from 'react'
import { Popup, Card01 } from '../index'
import usePopupStore from '../../store/popup';

export const Popup01 = () => {
    const triggerPopup = usePopupStore((state) => state.triggerPopup);
    const popId = usePopupStore((state) => state.popId);
    const content = usePopupStore((state) => state.content);

    return (
        <Popup >
            <Card01 width='500px' height='99vh'>
                <div className='popup-text'>
                    <p>id: {popId}</p>
                    <button onClick={() => {triggerPopup(0)}}>close</button>
                    
                </div>
            </Card01>
        </Popup>
    )
}