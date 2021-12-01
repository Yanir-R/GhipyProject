import React from 'react'
import { Link } from 'react-router-dom';
import { Gif } from './Gif';

export const GifList: React.FC<any> = ({ gifs }) => {

    return (
        <>
            {gifs.map((gif: any) => {
                return (
                    <div className="item">
                        <Gif url={gif} />
                        <Link to={':id'} >
                            Link To Gif Page
                        </Link>
                    </div>
                );
            })}
        </>
    )
}