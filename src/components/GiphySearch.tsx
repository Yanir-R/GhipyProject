import React, { useState } from 'react'
import { baseSearchApi } from '../api';
import '../App.css';

export const GiphySearch: React.FC<any> = () => {
    let [search, setSearch] = useState("");
    let [gifs, setGifs] = useState([]);
    let [loadingState, setLoadingState] = useState(false);

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
                        <div className="list">
                            {
                                gifs.map((gif) => {
                                    return (
                                        <div className="item">
                                            <img alt='Gif' src={gif} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>

    )

}

