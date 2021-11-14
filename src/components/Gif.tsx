import React from 'react';
import { Sticker } from '../react-app-env';
import '../App.css';

export const Gif: React.FC<Sticker> = ({ url }) => {
    return <img src={url} alt='Gif' />
}