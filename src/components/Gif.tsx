import React from 'react';
import { Sticker } from '../react-app-env';


export const Gif: React.FC<Sticker> = ({ url }) => {

    return <ul>  <img src={url} alt='Gif' /> </ul>
}
