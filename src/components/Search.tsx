import React, { useEffect, useState } from 'react';
import { apiKey } from '../api';


export const Search: React.FC = () => {
    const [search, setSearch] = useState('');
let query :string;
    useEffect(()=>{
        fetch(`api.giphy.com/v1/stickers/search?api_key=${apiKey}${query}`)
        .then(res => res.json())
        .then(data => console.log(data));

    }, [search])

    return (
        <>
            <input type="text"
                placeholder="Enter Sticker Name"
                onChange={(e) => setSearch(e.target.value)}
                // value={search}
                onClick={()=> console.log(search)}
            />
            {/* <button onClick={()=> console.log(search) }>Search</button> */}

        </>
    )
}
