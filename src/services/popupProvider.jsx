'use client'

import React from 'react'
import usePopupStore from '../store/popup';
import { Popup01 } from '../components/popups/Popup01';
import { Popup02 } from '../components/popups/Popup02';


export const PopupProvider = () => {
    const popId = usePopupStore((state) => state.popId);

    return (
        <>
            {(popId === 1) && <Popup01 />}
            {(popId === 2) && <Popup02 />}
        </>
    )
}