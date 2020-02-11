import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight:bold;
    font-size: 2.4rem;
    margin-top:2rem;
    display:block ;
`;

const Select = styled.select `
    width: 100%;
    display:block;
    padding:.5rem;
    -webkit-appearance: none;
    font-weight:bold;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {

    //console.log(opciones);

    // state de nuestro custom hook
    const [ state, actualizarState ]= useState(stateInicial);
    
    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange= {e => actualizarState(e.target.value) }
                value={state}
            >
                <option value="">-- Seleccionar --</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
                    {opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>

    );
    // retornar state, interfaz y fn que modifica el state
    return [state, SelectCripto, actualizarState];
}
 
export default useCriptomoneda;
