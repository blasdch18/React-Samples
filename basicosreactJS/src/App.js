import React, { Fragment } from 'react';
//import logo from './logo.svg';
//import PriComponente from './Components/PriComponente';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> Hola Mundo</h1>
        
//       </div>
//     );
//   }
// }



//-------------------------------------------- Class Component
// function App () {
//   return (
//     <Fragment>
//       <PriComponente />
//       <PriComponente />
//       <PriComponente />
//       <PriComponente />
//       <PriComponente />
//     </Fragment>
//   );
// }


// // Components :
// -Separa Codigo y elementos de la interfaz en pequeñas piezas re-utilizables
// -Son como funciones de Javascript
// -Se puede pasar datos a un componente por medio de Props
// -React los datos fluyen del componente padre al hijo

//  Hay 2 tipos de Componentes:
//  ------------------------------------- Functional Component
// +facil de crear leer 
// +menos codigo
// +facil de personalbar
// +no se usa this 
// +mejor performance (aun no confirmado)

// -no se usa los metodos de ciclo de vida (ComponentDidMount,
//   ComponentDidUpdate)
// -No tiene this.state.
// -No usa refs 
// - si se necesita estas 3 mejor usar Class Component

//import React, { Component } from 'react';--->  para usar componente
// import PriComponente from .... (ubicacion)

// *********** REACT CON JXS ******************

// function App(){    
//   const empleado = {
//     nombre: 'David Blas',
//     trabajo: 'Desarrollador Web'
//   }

//   return (//Retorna un solo elemento
//     <Fragment>
//       <h1>{empleado.nombre}</h1>
//       <p>{empleado.trabajo}</p>
//       {2+2}
//     </Fragment>  
//   );
// }

// *********** REACT SIN JXS ******************

// no es recomendable

// function App () {
//   return(
//     React.createElement(
//       'h1',
//       {id: 'heading', className: 'heading'},
//       'Hola mundo'
//     )
//   );
// }



// ***********  CREANDO MAS COMPONENTES ****************

import Header from './Components/Header';
import Footer from './Components/Footer';
import Productos from './Components/Productos';

function App () {
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual'
      />
      
      <Productos />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;