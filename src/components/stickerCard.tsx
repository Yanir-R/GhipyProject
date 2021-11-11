import React from 'react'
import { Sticker } from '../react-app-env'


export const StickerCard: React.FC<Sticker> = (sticker) => {
    return (
        <>
            <h1>sticker card </h1>
           <img src="" alt="" /> {sticker.url} 
        </>
    );
}