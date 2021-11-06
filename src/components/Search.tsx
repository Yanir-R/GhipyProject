import React, { useEffect, useState } from 'react';
import { apiKey, baseApi } from '../api';


export const Search: React.FC = () => {
    const [search, setSearch] = useState('');
    let query = search;
    let limit = 25;
    let rating = ["g", "pg", "pg-13", "r"];
    let endPoint = `${baseApi}?api_key=${apiKey}&q=${query}&limit=${limit}`;
    let fetchData = fetch(endPoint)

    const handleSearch = ((e: any) => {
        console.log('Search Result:');
    })


    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchData
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }, 3000)

        return () => clearTimeout(delayDebounceFn)
    }, [fetchData, search])


    return (
        <>
            <input
                type="text"
                autoComplete='off'
                placeholder="Enter Sticker Name"
                onChange={(e) => setSearch(e.target.value)}
                value={search}

            />
            <button onClick={() => handleSearch(fetchData)}>Search</button>

        </>
    )
}
