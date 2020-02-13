import React,{useState, useEffect} from 'react';
import Formulario from './Componentes/Formulario';
import ListadoImagenes from './Componentes/ListadoImagenes';


function App() {

  // state de la app
  const [ busqueda, guardarBusqueda ] =  useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ paginaActual, guardarPaginaActual ] = useState(1);
  const [ totalPaginas, guardarTotalPaginas ] = useState(5);

  useEffect( ()=> {
    const consultarAPI = async () => {
      if(busqueda ==='') return;

      const imagenesPorPagina=30;
      const key = '15241653-91112018f210cf1937e76488e';
      const url=`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);

      // calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);
      // mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth'})
    }

    consultarAPI();
  },[busqueda, paginaActual]);

  // definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if(nuevaPaginaActual === 0) return ;

    guardarPaginaActual(nuevaPaginaActual);
  }
  // definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1
    if(nuevaPaginaActual > totalPaginas) return ;

    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de Imágenes </p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes 
          imagenes={imagenes}
        />
        { (paginaActual === 1) ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaAnterior}
        >&laquo; Anterior</button>
        )}
        { (paginaActual === totalPaginas) ? null:(
        <button
            type="button"
            className="bbtn btn-info"
            onClick={paginaSiguiente}
        >Siguiente &raquo;</button>)  }
      </div>
      
    </div>
  );
}

export default App;
