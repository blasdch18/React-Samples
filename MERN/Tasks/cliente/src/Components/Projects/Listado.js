import React, { useContext, useEffect } from 'react';
import Proyecto from './Project';
import proyectoContext from '../../Context/Proyectos/ProyectoContext';

const Listado = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // obtener el proyecto al cargar el componente
    useEffect( () => {
        obtenerProyectos();
    }, []);

    // revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p> No Hay Proyectos</p>;

    

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
