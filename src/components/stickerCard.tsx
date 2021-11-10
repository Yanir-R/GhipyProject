import React from 'react'
import { Sticker } from '../react-app-env'


export const StickerCard: React.FC<Sticker> = (sticker) => {
    return (
        <>
            <div>
                <div>
                    <h1>
                        Title
                        {sticker.title}
                    </h1>
                </div>
                <div>
                    <h2> {sticker.id}</h2>
                </div>
                <div>
                    {sticker.embed_url}
                </div>
            </div>
        </>
    );
}