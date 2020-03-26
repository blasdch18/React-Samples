import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../Context/Proyectos/ProyectoContext';

const NuevoProyecto = () => {

    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario,mostrarFormulario } = proyectosContext;

    // state para proyecto
    const [ proyecto, guardarProyecto ] = useState({
        nombre:'',

    });

    // lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...guardarProyecto,
            [e.target.name] : e.target.value
        })
    }

    // extraer nombre de proyecto
    const { nombre } = proyecto ;

    //cuando el usuario envia un proyecto
    const onsubmitProyecto = e => {
        e.preventDefault();

        // validar el proyecto

        // agregar el state

        // Reiniciar el form
    }
    const onClick = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>        
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClick}
            >
                Nuevo Proyecto
            </button>
                
            
            {formulario ? (
                <form
                className="formulario-nuevo-proyecto"
                onSubmit={onsubmitProyecto}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre del Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />
            </form>
            )

            : null
            }
        </Fragment>    
     );
}
 
export default NuevoProyecto;