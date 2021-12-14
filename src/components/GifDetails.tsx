import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api } from '../api';
import '../GiphySearchAPI.css';

export const GifDetails: React.FC<any> = () => {
    let { id } = useParams()
    let [data, setData] = useState([])

    let fetchGifDetails = (id: any) => {
        api.getGifById(id).then((resultId) => {
            setData(resultId.data.map((gifId: any) => {
                return {
                    title: gifId.title,
                    rating: gifId.rating,
                    embed_url: gifId.images.fixed_height.url
                }
            }))
        })
            .catch(() => {
                alert("Something went wrong with details for gif");
            })
    }
    useEffect(() => {
        fetchGifDetails(id)
    }, [id])

    return (
        <>
            <h2>Gif ID : {id}</h2>
            {
                data.map((gifData: any) => {
                    return (
                        <div>
                            <img src={gifData.embed_url} alt={'id'} />
                            <h2>
                                title:    {gifData.title}
                            </h2>
                            <h2>
                                rating:   {gifData.rating}
                            </h2>
                        </div>
                    )
                })
            }
        </>
    );
}