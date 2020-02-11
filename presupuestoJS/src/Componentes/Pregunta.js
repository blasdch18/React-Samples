import React, { Fragment,useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

     //definir states
    const [cantidad, guardarCantidad ] = useState(0);// presupuesto inicia en 0
    const [error, guardarError] = useState(false);//inicia en false
    

    //funcion que lee el presupuesto 
    const definirPresupuesto = e => {
        //console.log( parseInt(e.target.value) );importante convertir a int
        guardarCantidad( parseInt(e.target.value , 10) ); // base 10
    }

    // submit para presupuesto
    const agregarPresupuesto = e => {
        //event.preventDefault()
        //Cancela el evento si este es cancelable, sin detener el resto 
        //del funcionamiento del evento, es decir, puede ser llamado de 
        //nuevo.
        e.preventDefault();

        // Validar 
        if( cantidad < 1 || isNaN(cantidad) ) {// isNaN bota error si no es el valor
            guardarError(true);
            return;
        }
        // Si pasa la validacion 
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }


    return (
        <Fragment>
            <h2>Coloca Tu Presupuesto</h2>

            { error ? <Error mensaje="El Presupuesto es incorrecto"/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}//funcion
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
export default Pregunta;