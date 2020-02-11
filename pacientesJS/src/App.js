import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Componentes/Formulario';
import Cita from './Componentes/Cita';

function App() {
  // Citas en el Local Storage  
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));//convierte en un string
  if(!citasIniciales){
    citasIniciales =[];
  }



  // Crear State de Citas
  //const [citas, guardarCitas]= useState([]);
  const [citas, guardarCitas]= useState(citasIniciales);

  // Usar Useeffect para realizar ciertas operaciones cuando el state cambia
  useEffect ( () => {
                      //console.log('Doc listo o algo');
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));//convierte en un string                    
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas] );

  // Funcion que tome las citas actuales y aguere la nueva
  const crearCita = cita => {
    //console.log(cita);
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // Funcion que elimina una cita por su ID
  const eliminarCita = id => {
    //console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
  }

  // Mensaje condicional 
  //console.log(citas.lenght);//=0
  const titulo = citas.length === 0 ? 'No hay Citas ' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
