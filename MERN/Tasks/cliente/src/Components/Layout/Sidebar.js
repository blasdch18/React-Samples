import React from 'react';
import NuevoProyecto from '../Projects/NuevoProyecto';
import ListadoProyectos from '../Projects/Listado';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>
                MERN<span>Tasks</span>
            </h1>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>
     );
}
 
export default Sidebar;