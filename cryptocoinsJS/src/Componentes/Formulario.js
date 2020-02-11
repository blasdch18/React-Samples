import React , {useEffect,useState} from 'react';
import styled from '@emotion/styled';

import Error from './Error';
import useMoneda from '../Hooks/useMoneda';
import useCriptomoneda from '../Hooks/useCriptomoneda';
import Axios from 'axios';

import PropTypes from 'prop-types';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none; 
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Formulario = ({guardarMoneda,guardarCriptomoneda}) => {

    // state del listado de criptomonedas
    const [listacripto, guardarCriptoMonedas ] = useState([]);
    const [ error, guardarError] = useState(false);

    const MONEDAS = [ 
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'PEN', nombre: 'Sol Peruano'},
        {codigo: 'EUR', nombre: 'Euro '},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]
    // utilizar hook useMoneda
    const [ moneda, SelectMonedas] = useMoneda('Elige tu Moneda','',MONEDAS);
    // utilizar hook useCriptomoneda
    const [criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu Criptomoneda','',
    listacripto);
    // ejecutar llamado a la API 
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await Axios.get(url);

            guardarCriptoMonedas(resultado.data.Data);
        }
        consultarAPI();
    },[]);
    // cuando  el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();
        // validar si los campos estan llenos
        if(moneda === '' || criptomoneda === '') {
            guardarError(true);
            return;
        }
        // pasar los daos al componente principal
        guardarError(false);

        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <SelectMonedas />

            <SelectCripto />
            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
Formulario.propTypes = {
    guardarMoneda: PropTypes.func.isRequired,
    guardarCriptomoneda: PropTypes.func.isRequired
}

export default Formulario;