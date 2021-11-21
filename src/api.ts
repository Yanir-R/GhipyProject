export const apiKey = 'wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn';
export const baseSearchApi = 'https://api.giphy.com/v1/gifs/search?api_key=wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn&rating=g&lang=en'



export const api = {

    searchForGiphyList: async (query: string, limit: number, offset: number) => {
        const res = await fetch(`${baseSearchApi}&q=${query}&limit=${limit}&offset=${offset}`);
        const data = await res.json();
        return data
    },

    // stickersList: (query: string) => {
    //     return fetch(`${ baseApiList }?q = ${ query }& api_key=${ apiKey } `)
    //         .then(res => res.json()
    //             .then(sticker => console.log('Giphy List Stickers:', sticker))
    //             .catch(error => console.log(error)))
    // }

}





