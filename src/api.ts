export const apiKey = 'wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn';
export const baseSearchApi = 'https://api.giphy.com/v1/gifs/search?api_key=wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn&rating=g&lang=en'
export const baseSearchById = 'https://api.giphy.com/v1/gifs'


export const api = {

    searchForGiphyList: async (query: string, limit: number, offset: number) => {
        const res = await fetch(`${baseSearchApi}&q=${query}&limit=${limit}&offset=${offset}`);
        const data = await res.json();
        return data
    },
    getGifById: (gifId: string) => async () => {

        const res = await fetch(`${baseSearchById}/${gifId}?api_key=${apiKey}`)
        const data = await res.json()
            .then(gifId => console.log('Gif Id:', gifId))
            .catch(error => console.log(error))

        return data
    }

    // getGifById: async (id: any) => {

    //     const res = await fetch(`${baseSearchById}/${id}?api_key=${apiKey}`)
    //     const data = await res.json()
    //         .then(gifId => console.log('Gif Id:', gifId))
    //         .catch(error => console.log(error))

    //     return data
    // }

}





