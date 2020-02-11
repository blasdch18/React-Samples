import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita})=> {
    //Crear State para Citas
    const [Cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha :'',
        hora :'',
        sintomas : ''
        
    });
    // Crear State para Error
    const [ error, actualizarError ] = useState(false)


    //Funcion que se ejecuta cada vez q el usuario escrbieen un input
    const actualizarState = e => {
        //console.log(e.target.value);
        actualizarCita({
            ...Cita,//copia
            [e.target.name]: e.target.value
        })
    }
    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = Cita
    
    //Eventos leer al enviar formulario - Agregar cita
    const submitCita = e => {
        //alert('Enviando')
        e.preventDefault();
        //console.log('enviando form')
        
        console.log(mascota);
        // Validar--------------------------------------------------
        if(mascota.trim() === '' ||
           propietario.trim() === '' ||
           fecha.trim() === '' ||
           hora.trim() === '' ||
           sintomas.trim() === '' ){
            actualizarError(true);
            return;
        }
        
        console.log('agregando. . .')
            // Eliminar mensaje previo
        actualizarError(false);

        // Asignar ID-------------------------------------------------
        //Cita.id =20;
        Cita.id=uuid();
        console.log(Cita);
        
        
        // Crear la cita----------------------------------------------
        crearCita(Cita);
        
        // Reiniciar form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha :'',
            hora :'',
            sintomas : ''
        })
    }
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            
            { error ? <p className="alerta-error">Todos los campos
            son obligatorios</p>: null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Propietario"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}>
                    
                </textarea>
                <button
                    type="submit"
                    className="u-full-width btn btn-success">
                    Agregar Cita 

                </button>
            </form>

        </Fragment>
        
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;