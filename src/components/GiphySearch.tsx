import React, { useState } from 'react'
import { baseSearchApi } from '../api';
import '../App.css';
import { Gif } from './Gif';
import Paginate from './Paginate';

export const GiphySearch: React.FC<any> = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    let [search, setSearch] = useState("");
    let [gifs, setGifs] = useState([]);
    let [loadingState, setLoadingState] = useState(false);
    // let [isError, setIsError] = useState(false);
    const currentItems = gifs.slice(indexOfFirstItem, indexOfLastItem);

    let searchGif = () => {
        if (search.length > 0) {
            setLoadingState(true);
            fetch(baseSearchApi + search)
                .then((res) => {
                    setLoadingState(false);
                    return res.json();
                })
                .then((result) => {
                    console.log(result);
                    setGifs(result.data.map((gif: any) => {
                        return gif.images.fixed_height.url;
                    }))
                })
                .catch(() => {
                    alert("Something went wrong");
                    setLoadingState(false);
                })
        }
    }

    const pageSelected = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <div className="header">
                <div>
                    <input
                        type="text"
                        placeholder="Search GIF"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={searchGif}>
                        Search
                    </button>
                </div>
            </div>
            <div className="result">
                {
                    (loadingState) ? (
                        <div className="loading">
                            <div className="loader">
                            </div>
                        </div>
                    ) : (
                        <>
                            <Paginate
                                pageSelected={pageSelected}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                totalItems={gifs.length} />
                            <div className="list">
                                {currentItems.map((gif) => {
                                    return (
                                        <div className="item">
                                            <Gif url={gif} />
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )
                }
            </div>
        </div>

    )
}




