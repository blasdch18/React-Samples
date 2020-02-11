import React,{ useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    // state de gastos
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();
        
        //validar
        if(cantidad<1 || isNaN ( cantidad) || nombre.trim() ===''){
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto 
        const gasto = {
            nombre,
            cantidad,
            id:shortid.generate()
        }
                    //console.log(gasto);

        // pasar el gasto al componente princiṕal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // reset el form 
        guardarNombre('');
        guardarCantidad(0);
    }


    return (
        <form
            onSubmit={agregarGasto}
        >

            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o
                            Presupesto Incorrecto"/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 10000000"
                    value={cantidad}
                    onChange={e => guardarCantidad(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;