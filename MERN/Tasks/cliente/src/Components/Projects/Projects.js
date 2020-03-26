import React from 'react';
import Sidebar from '../Layout/Sidebar';
import Barra from '../Layout/Barra';
import FormTarea from '../Tasks/FormTarea';
import ListadoTareas from '../Tasks/ListadoTareas';

const Projects = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            
            <div className="seccion-principal">
                <Barra />
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
            
        </div>
     );
}
 
export default Projects;