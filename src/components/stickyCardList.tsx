import React, { useState } from 'react'
import { api } from '../api';
import { Sticker } from '../react-app-env'
import { StickerCard } from './stickerCard';


export const StickyCardList: React.FC<{ stickers: Sticker[] }> = ({ stickers }) => {
    const [search, setSearch] = useState('');
    const [tag] = useState('')

    return (
        <div>
            <input
                type="text"
                autoComplete='off'
                placeholder="Enter Sticker Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => api.stickersList(search, tag)}>Click To see card</button>
            <ul>
                {stickers.map((sticker: Sticker) => (
                    <StickerCard
                        id={sticker.id}
                        title={sticker.title}
                        type={sticker.type}
                        embed_url={sticker.embed_url}
                    />
                ))}
            </ul>


        </div>
    );
}

