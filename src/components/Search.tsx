import React, { useEffect, useState } from 'react';
import { apiKey, baseApi } from '../api';


export const Search: React.FC = () => {
    const [search, setSearch] = useState('');
    let query = 'sticker';
    let limit = 25;
    let rating = ["g", "pg", "pg-13", "r"];
    let endPoint = `${baseApi}?api_key=${apiKey}q=${encodeURI(query)}limit=${limit}}`;
    let fetchData = fetch(endPoint)

 
    useEffect(()=>{
        fetchData
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    }, [search])

    return (
        <>
            <input type="text"
                placeholder="Enter Sticker Name"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                onClick={()=> console.log(search)}
            />
            <button onClick={()=> console.log(search) }>Search</button>

        </>
    )
}
