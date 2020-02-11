import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './Componentes/Frase';



const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: .8rem 3rem;
  border-radius: .5rem;
  
  font-size: 2rem;
  border: 2px solid black;
  transition:   background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;

  }
`;

function App() {

 // const consultarAPI = () => {
    //console.log('consultando .. .  .');
  //   const api = fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   //console.log(resultado)
  //   const frase = api.then( respuesta => respuesta.json());
  //   frase.then(resultado => console.log(resultado));
  //--------------------------------------------------------- modo clasico

  // state de frases
  const [ frase, obtenerFrase ] = useState({});

  
  const consultarAPI = async () => {
  const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const frase = await api.json()
  obtenerFrase(frase[0]);
}

  // cargar una frase con  useEffect
  useEffect( () => {
    consultarAPI()
  }, []);



  return (  
    <Contenedor>  
      <Frase 
        frase={frase}
      />

      <Boton
        onClick={consultarAPI}
      >
        Get Phrase
      </Boton>
    </Contenedor>
  );
}

export default App;
