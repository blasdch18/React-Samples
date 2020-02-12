import React, {Fragment, useState, useEffect} from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import ListadoNoticias from './Componentes/ListadoNoticias';

function App() {

  // state definir la categoria y noticias 
  const [categoria, guardarCategoria] = useState('');// inicia en vacio
  const [noticias, guardarNoticias] = useState([]); //valor inicial un arreglo

  useEffect( ()=>{
    const consultarAPI = async ()=> {
        const url =`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=bec2088135cb47a18b7c9198e7754482`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria] ); // como dependencia categoria

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

        <div className="container light-blue ">
          <Formulario 
              guardarCategoria={guardarCategoria}
          />
          <ListadoNoticias 
              noticias={noticias}
          />
        </div>
     

    </Fragment>
  );
}

export default App;
