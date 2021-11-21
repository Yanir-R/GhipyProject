import React, { useState } from 'react';
import { api } from '../api';

export const Search: React.FC = () => {
    const [search, setSearch] = useState('');
    // let [limit, setLimit] = useState(25)
    return (
        <>
            <input
                type="text"
                autoComplete='off'
                placeholder="Enter Sticker Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => api}>Search</button>
        </>
    )
}

