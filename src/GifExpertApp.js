import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    //const categories = ["nombre1","nombre2","nombre3"];

    const [categories, setCategories] = useState([])


    //const handleAdd = () => {
        //setCategories([...categories,"Aglgo"])
    //    setCategories(cats => [...cats,"Nombre4"])
        //Las dos formas sirven, se le pasa como paráetro a setCategories 
        //por defecto el valor inicial del useState
    //}
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                 categories.map( cat => (
                    <GifGrid 
                        category={cat} 
                        key={cat}
                    />
                 ))   
                }
            </ol>

           
        </>
    )
}

 //<button onClick={handleAdd}>Agregar</button>