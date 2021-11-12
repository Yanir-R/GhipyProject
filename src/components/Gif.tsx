import React from 'react';
import { Sticker } from '../react-app-env';

export const Gif: React.FC<Sticker> = ({ url }) => {
    return (
        <div className="bazingaPicture">
            <iframe title="This Is Giphy Sticker Title"
                src={url}
                width="480" height="480" frameBorder="0"
                allowFullScreen >
            </iframe><p>
                <a href="https://giphy.com/gifs/bazinga-GFLIjIaiAL0kw">
                    Via PDD
                </a></p>
        </div>
        
    )
}