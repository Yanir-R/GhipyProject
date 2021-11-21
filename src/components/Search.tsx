import React from 'react';

export const Search: React.FC<any> = ({ search, setSearch, searchGif, currentPage }) => {

    return (
        <div>
            <input
                type="text"
                autoComplete='off'
                placeholder="Enter Sticker\Gif You Want To See"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={(() => searchGif(currentPage))}>
                Search
            </button>
        </div>
    )
}