import React from 'react';
import { Link } from 'react-router-dom';
import { Sticker } from '../react-app-env';


export const Gif: React.FC<Sticker> = ({ url, id }) => {

    return (
        <div>
            <ul key={id}>  <img src={url} alt='Gif' />
            </ul>
            <Link to={`gif/${id}`}>
                Go To Gif Details Page
            </Link>
        </div>
    )
}
