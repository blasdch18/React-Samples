import React, { useState } from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Resumen from './Componentes/Resumen';
import Resultado from './Componentes/Resultado';
import Spinner from './Componentes/Spinner';


import styled from '@emotion/styled';

const Contenedor = styled.div `
    max-width: 600px;
    margin: 0 auto;
   
`;
const ContenedorFormulario = styled.div `
  background-color: #FFF;
  padding: 2rem;
`

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marcas:'',
      year:'',
      plan:'',
    }
  }); 
  // state para el Spinner
  const [ cargando, guardarCargando] = useState(false);


  // extraer datos
  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>  
      <Header 
        titulo='Cotizador de Seguros'
      />

      <ContenedorFormulario>
          <Formulario 
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />
          { cargando ? <Spinner /> : null}
          

          <Resumen 
            datos={datos} 
          />

          { !cargando 
          ? <Resultado 
              cotizacion={cotizacion}
            />
          : null
          }
          
      </ContenedorFormulario>
    </Contenedor>
    
    
  );
}

export default App;
