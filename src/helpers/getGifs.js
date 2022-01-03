export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=vQ2hxjRwN85zKs0FiPfcyq6X3BNDIaBQ`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.fixed_height_downsampled.url
        }

    })

    return gifs;
}