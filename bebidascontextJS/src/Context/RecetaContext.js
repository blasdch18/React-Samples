import React , { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();


const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({//obbjeto
        nombre:'',
        categoria:''
    });
    const [ consultar, guardarConsultar ] = useState(false);

    const { nombre, categoria } = busqueda; //pasarle

    useEffect( ()=> {
        if(consultar){
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`    
                //console.log(url);
                const resultado = await axios.get(url);
                guardarRecetas(resultado.data.drinks);
        }
        obtenerRecetas();
        
    }
    // eslint-disable-next-line
    }, [busqueda]);

    return ( 
        <RecetasContext.Provider
            value= {{
                recetas,// primero state
                buscarRecetas, // despues las funciones
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;