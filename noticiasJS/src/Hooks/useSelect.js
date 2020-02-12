import React,{useState} from 'react';

const useSelect = (stateInicial, opciones) => {

    //state del custom hook
    const[ state, actualizarState] = useState(stateInicial);

    
    const SelectNoticias = ()=> (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {/* <!-- option value="">Seleccione</option --> */}
            {opciones.map( opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias]; //retorna un arreglo
}
 
export default useSelect;