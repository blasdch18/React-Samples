import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class Productos  extends Component {
    state = {
        productos: [
        {id : 1, name : 'Camisa ReactJS', precio: 30},
        {id : 2, name : 'Camisa VueJS', precio: 30},
        {id : 3, name : 'Camisa Angular', precio: 30},
        {id : 4, name : 'Camisa NodeJS', precio: 30}
    ]
    }

    componentDidMount (){
        console.log(1)
    }

    componentWillMount () {
        console.log(2)
    }

    componentWillUpdate () {
        console.log(3)
    }

    componentWillUnmount () {
        console.log(4)
    }    

    render() {

        console.log(5)

        const {productos} = this.state;

        //console.log(productos);
        return (
            <Fragment>
            <h1>
                Lista de Productos
                {productos.map(producto  =>(
                    <Producto 
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </h1>
            </Fragment>
        );
    }
}

export default Productos;