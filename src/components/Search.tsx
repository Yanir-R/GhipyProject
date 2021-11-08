import React, { useState } from 'react';
import { apiKey, baseApi } from '../api';

export const Search: React.FC = () => {
    const [search, setSearch] = useState('');
    let query = search;
    let limit = 25;
    // let rating = ["g", "pg", "pg-13", "r"];
    let endPoint = `${baseApi}?api_key=${apiKey}&q=${query}&limit=${limit}`;
    let fetchData = fetch(endPoint)

    function callAPI() {
        fetchData
            .then(res => res.json()
                .then(data => console.log('Giphy Stickers:', data))
                .catch(error => console.log(error)))
    }

    return (
        <>
            <input
                type="text"
                autoComplete='off'
                placeholder="Enter Sticker Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => callAPI()}>Search</button>
        </>
    )
}
