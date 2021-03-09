import React from 'react'

export const GifGridItem = ({ imagen }) => {
    console.log(imagen.url);
    return (
        <div className="card animate__bounceOut" >
            <img src={imagen.url} alt={imagen.tite}></img>
            <p>{imagen.title}</p>
        </div>
    )
    
}
