import React from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import ListaRecetas from './Componentes/ListaRecetas';

import CategoriasProvider from './Context/CategoriasContext';
import RecetasProvider from './Context/RecetaContext';
import ModalProvider from './Context/ModalContext';

function App() {
  return (
    <CategoriasProvider> 
      <RecetasProvider>
        <ModalProvider>
          <Header />        
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;


//  CONTEXT API

//Cuenta con un Hook llamado useContext

// puede pasar el state o funciones desde el componente principal hasta los hijos
// sin necesidad de pasarlo por cada componente

// REact solo pasa los datos del componente principal al hijo 

// SE puede actualizar el state desde el hijo. (o ejecutar una funcion que lo actualice)
