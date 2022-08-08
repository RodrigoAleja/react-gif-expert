import { useState } from "react";
import { AgregarCategoria, GifGrid } from './component';


export const GiftExperApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const agregarCategoria = (NuevaCategoria) => {
        //console.log(NuevaCategoria);
        if ( categories.includes(NuevaCategoria) ) return;
        setCategories([NuevaCategoria, ...categories]); 
    }

return (
    <>
        <h1>GiftExperApp</h1>

        <AgregarCategoria 
            onNewCategory= { (value) => agregarCategoria(value) }
        />
            {
                categories.map( (category) => (
                       <GifGrid key={category} category={category} />             
                 ) )
            }
    </>
)
}