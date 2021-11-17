export const apiKey = 'wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn';
export const baseSearchApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=100&q=`


export const api = {

    searchForGiphyList: async () => {
        const res = await fetch(`${baseSearchApi}`);
        try {
            const data = await res.json();
            return console.log('Giphy SearchAPI:', data);
        } catch (error) {
            return console.log(error);
        }
    },

    // stickersList: (query: string) => {
    //     return fetch(`${baseApiList}?q=${query}&api_key=${apiKey}`)
    //         .then(res => res.json()
    //             .then(sticker => console.log('Giphy List Stickers:', sticker))
    //             .catch(error => console.log(error)))
    // }

}





