import { Sticker } from "./react-app-env";

export const apiKey = 'wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn';
export const baseApi = 'https://api.giphy.com/v1/stickers/search';
export const baseApiList = 'https://api.giphy.com/v1/stickers/random';




export const api = {

    searchForStickerList: (search: string, limit: number) => {
        return fetch(`${baseApi}?api_key=${apiKey}&q=${search}&limit=${limit}`)
            .then(res => res.json()
                .then(data => console.log('Giphy SearchAPI Stickers:', data))
                .catch(error => console.log(error)))
    },

    stickersList: async (tag: string, search: string) => {
        const res = await fetch(`${baseApiList}?api_key=${apiKey}&tag=${tag}`);
        try {
            const sticker_1 = await res.json();
            return console.log('Giphy List Of Stickers:', sticker_1);
        } catch (error) {
            return console.log(error);
        }
    }

}
// stickersList: (page: number, limit: number) => {
//     return fetch(`${baseApi}?api_key=${apiKey}&page=${page}&limit=${limit}`)
//         .then(res => res.json()
//             .then(sticker => console.log('Giphy List Of Stickers:', sticker))
//             .catch(error => console.log(error)))
// }