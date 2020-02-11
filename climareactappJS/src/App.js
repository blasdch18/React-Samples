import React,{ Fragment, useState, useEffect} from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Clima from './Componentes/Clima';
import Error from './Componentes/Error';



function App() {
  // states
  const [busqueda, guardarBusqueda]= useState({// objeto
    ciudad:'',
    pais:''
});
  const [consultar, guardarConsultar]= useState(false);
  const [resultado, guardarResultado]= useState({});
  const [error, guardarError]= useState(false);
  
  // Extraer 
  const { ciudad, pais }= busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if(consultar) {
        const appId = '95428ad75fa9f9da87dedae84911cc07';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}` ;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

      //console.log(resultado);  
        guardarResultado(resultado);
        guardarConsultar(false);
        // Detecta si hubo resultados correctos en la consulta
        if(resultado.cod === "404") {
            guardarError(true);
        }else {
            guardarError(false);
        }
      }      
    }
    consultarAPI();
    // eslint-disable-next-line
  },[consultar]);

  let componente;
  if(error){
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima 
                    resultado={resultado}
                />
  }

  return (
    <Fragment>
      <Header
          titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
                <Formulario 
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar={guardarConsultar}
                />
            </div>
            <div className="col m6 s12">
                {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
