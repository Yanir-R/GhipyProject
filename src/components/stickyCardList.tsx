import React, { useEffect, useState } from 'react'
import { api } from '../api';
import { Sticker } from '../react-app-env'
import { StickerCard } from './stickerCard';


export const StickyCardList: React.FC = () => {
    const stringifyData = (data: { data: string | null; }) => JSON.stringify(data, null, 2)
    const initialData = stringifyData({ data: null })
    const loadingData = stringifyData({ data: 'loading...' })
    const [data, setData] = useState(initialData)

    const [sticker, setSticker] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = () => {
            setLoading(true)
            const uri = `https://api.giphy.com/v1/gifs/?gif_id=${sticker} `
            fetch(uri)
                .then(res => res.json())
                .then(({ results }) => {
                    setLoading(false)
                    const { url } = results[0]
                    const dataVal = stringifyData({
                        ...url
                    })
                    setData(dataVal)
                })
        }
        fetchData()
    }, [sticker])

    return (
        <div>
            <button
                onClick={() => setSticker('sticker')}
            ></button>
            <section>
                {loading ? <pre> {loadingData} </pre> : <pre>{data}</pre>}
            </section>

        </div>
    );
}

