import React, { useContext, useEffect } from 'react';
import Proyecto from './Project';
import proyectoContext from '../../Context/Proyectos/ProyectoContext';

const Listado = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    useEffect( () => {
        obtenerProyectos();
    }, []);

    // revisar si proyectos tiene contenido
    if(proyectos.length === 0) return null;

    

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default Listado;
