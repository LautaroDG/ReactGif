


export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ABc9Gfa6Axj2HQ9kR6LULGGntWqMNiZE`;
    const respuesta = await fetch( url ); //Devuelve promesa
    const {data} = await respuesta.json(); 

    const gifs = data.map( img => {

        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,

        }
    })
    return gifs;//Devuelve promesa
}