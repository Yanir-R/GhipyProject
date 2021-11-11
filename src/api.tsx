import { Sticker } from "./react-app-env";

export const apiKey = 'wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn';
export const baseApi = 'https://api.giphy.com/v1/stickers/search';
export const baseApiList = 'https://giphy.com/embed'




export const api = {

    searchForStickerList: (search: string, limit: number) => {
        return fetch(`${baseApi}?api_key=${apiKey}&q=${search}&limit=${limit}`)
            .then(res => res.json()
                .then(data => console.log('Giphy SearchAPI Stickers:', data))
                .catch(error => console.log(error)))
    },

    stickersList: (query: string) => {
        return fetch(`${baseApiList}?q=${query}&api_key=${apiKey}`)
            .then(res => res.json()
                .then(sticker => console.log('Giphy List Stickers:', sticker))
                .catch(error => console.log(error)))
    }

}





