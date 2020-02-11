import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// API = app programming interface
// Funciones , metodos que ofrece una libreria para ser utilizada por otro software
// Web service es cuando podemos conectarnos a un servicio via web
// Para acceder al servicio se debe enviar una peticion estructurada
// usualmente se usa JSON
// Ejemplo: Google Maps API

// REST = Representational State Transfer
// Forma de trasladar datos de un dominio dentro de otro o a otro
// Puede ser diseñada en cualquier lenguaje
// REST Describe como deben ponerse a disposicion los recursos
// La API debe respónder a los Request de HTTP:
// GET, POST, PUT, PATCH, DELETE
// Cada API tiene sus propias reglas, metodos, estructuras

// Una REST API cuenta con Endpoints (o Urls) para hacer operaciones CRUD
// Listar todos los clientes  GET  /clientes
// Obtener un solo Cliente GET /clientes/10
// Crear un nuevo cliente  POST  /clientes
// Editar un cliente  PUT  /cliente/3
// Borrar un cliente DELETE  /clientes/8

//  Consultar APIs con REACT
// 1 Fetch API y AJax(nativo de Js)
// Axios
// jQuery Ajax
