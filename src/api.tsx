export const apiKey = 'wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn';
export const baseApi = 'https://api.giphy.com/v1/stickers/search';

export const api = {

    searchForStickerList: (search: string, limit: number) => {
        return fetch(`${baseApi}?api_key=${apiKey}&q=${search}&limit=${limit}`)
            .then(res => res.json()
                .then(data => console.log('Giphy Stickers:', data))
                .catch(error => console.log(error)))
    },
    stickersList: () => {
        
    }

}