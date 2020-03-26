import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    //state para iniciar sesion 
    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: '',
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = e =>{
        guardarUsuario({
            ...usuario,//copia de usuario
            [e.target.name] : e.target.value
        }) 
    }

    // cuando el usuario quiere dar sesion 
    const onSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacios 

        // pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu Email"
                            onChange={onChange}
                        />
                        
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu Password"
                            onChange={onChange}
                        />
                        
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesion"/>
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;