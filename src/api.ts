export const apiKey = 'wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn';
export const baseSearchApi = 'https://api.giphy.com/v1/gifs/search?api_key=wpmzNB6ec7T0FhncGGtQ6AXUY4UYlKbn&rating=g&lang=en'
export const baseSearchById = `https://api.giphy.com/v1/gifs?api_key=${apiKey}`

export const api = {

    searchForGiphyList: async (query: string, limit: number, offset: number) => {
        const res = await fetch(`${baseSearchApi}&q=${query}&limit=${limit}&offset=${offset}`);
        const data = await res.json();
        return data
    },
    getGifById: async (ids: any) => {
        const res = await fetch(`${baseSearchById}&ids=${ids}`)
        const data = res.json()
        return data
    }
}





