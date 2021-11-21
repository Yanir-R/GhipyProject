import React from 'react'
import { Gif } from './Gif';



export const GifList: React.FC<any> = ({ gifs }) => {
    return (
        <>
            {gifs.map((gif: any) => {
                return (
                    <div className="item">
                        <Gif url={gif} />
                    </div>
                );
            })}
        </>
    )
}