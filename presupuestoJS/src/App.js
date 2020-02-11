import React, { useState, useEffect } from 'react';
import Pregunta from './Componentes/Pregunta';
import Formulario from './Componentes/Formulario';
import Listado from './Componentes/Listado';
import ControlPresupuesto from './Componentes/ControlPresupuesto';

function App() {

  // definir state 
  const [ presupuesto , guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante] = useState(0);
  const [ mostrarPregunta, actualizarPregunta] = useState(true);
  const [ gastos, guardarGastos] = useState([]);// inicia con arreglo
  const [ gasto, guardarGasto] = useState({});
  const [ crearGasto, guardarCrearGasto] =  useState(false);

  // UseEffect que actualiza el restante
  useEffect( () => {
      if(crearGasto) {

        // agrega nuevo presupuesto


        guardarGastos([
          ...gastos,
          gasto
        ]);

        // rest el presupuesto actual
        const presupuestoRestante = restante - gasto.cantidad;
        guardarRestante(presupuestoRestante);


        guardarCrearGasto(false);
      }
  }, [gasto,crearGasto ,gastos ,restante]);


  // cuando agregamos un gasto
  // const agregarNuevoGasto= gasto =>{
  //         //console.log(gastos)
  //   guardarGastos([
  //     ...gastos,
  //     gasto
  //   ])      
  // }

  return (
    <div className="container">
      <header>
        <h1> Gasto Semanal  </h1>

        <div className="contenido-principal contenido">
          { mostrarPregunta ? // Carga condicional de componente
            (
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
             ) : (
             
              <div className="row">
                  <div className="col-sm">
                      <Formulario 
                        //agregarNuevoGasto={agregarNuevoGasto}
                        guardarGasto={guardarGasto}
                        guardarCrearGasto={guardarCrearGasto}
                      />
                  </div>

                  <div className="col-sm">
                      <Listado 
                        gastos={gastos}
                      />
                      <ControlPresupuesto 
                        presupuesto={presupuesto}
                        restante={restante}
                      />

                  </div>
              </div>
             )  
          }
          
        </div>
      </header>
    </div>
  );
}

export default App;
