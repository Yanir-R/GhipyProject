import React, { useState } from 'react'
import { api } from './api';
import './GiphySearchAPI.css';
import { GifList } from './components/GifList';
import Paginate from './components/Paginate';
import { Search } from './components/Search';

export const GiphySearchAPI: React.FC<any> = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [itemsTotal, setItemsTotal] = useState(0)

    let [search, setSearch] = useState("");
    let [gifs, setGifs] = useState([]);
    let [loadingState, setLoadingState] = useState(false);

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
                <Search
                    search={search}
                    setSearch={setSearch}
                    searchGif={searchGif}
                    currentPage={currentPage}
                />
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

                            <div className="list">

                                <GifList gifs={gifs} />

                            </div>

                            <Paginate
                                itemPerPage={itemsPerPage}
                                pageSelected={pageSelected}
                                itemsTotal={itemsTotal}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}

                            />
                        </>
                    )
                }
            </div>
        </div>

    )
}




