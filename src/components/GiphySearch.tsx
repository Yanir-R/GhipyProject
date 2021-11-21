import React, { useState } from 'react'
import { api, baseSearchApi } from '../api';
import '../App.css';
import { Gif } from './Gif';
import Paginate from './Paginate';

export const GiphySearch: React.FC<any> = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [itemsTotal, setItemsTotal] = useState(0)

    let [search, setSearch] = useState("");
    let [gifs, setGifs] = useState([]);
    let [loadingState, setLoadingState] = useState(false);

    // let [isError, setIsError] = useState(false);

    let searchGif = (pageNumber: number) => {
        if (search.length > 0) {
            setLoadingState(true);
            api.searchForGiphyList(search, itemsPerPage, (pageNumber - 1) * itemsPerPage)
                .then((result) => {
                    console.log(result);
                    setLoadingState(false);
                    setGifs(result.data.map((gif: any) => {

                        return gif.images.fixed_height.url;
                    }))
                    setItemsTotal(result.pagination.total_count)
                })
                .catch(() => {
                    alert("Something went wrong");
                    setLoadingState(false);
                })
        }
    }

    const pageSelected = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        searchGif(pageNumber)
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
                    <button onClick={(() => searchGif(currentPage))}>
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
                                totalItems={itemsTotal} />
                            <div className="list">
                                {gifs.map((gif) => {
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




