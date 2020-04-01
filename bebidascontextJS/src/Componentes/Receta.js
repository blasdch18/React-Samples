import React, { useContext, useState } from 'react';

import { ModalContext } from '../Context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {


    // conf del modal 

    const [modalStyle]= useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    // extraer los valores del context
    const {info , guardarIdReceta, guardarReceta } = useContext(ModalContext);
    //console.log(info);

    // Muestra  y formatea los ingredientes
    const mostrarIngredientes = info =>{
        let ingredientes = [];
        for(let i = 1; i < 16 ; i++){
            if ( info[`strIngredient${i}`]){
                ingredientes.push(
                <li>{info[`strIngredient${i}`]} {info[`strMeasures${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }

    return ( 
        <div  className="col-md-4 md-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img className="card-img-top" src={receta.strDrinkThumb}
                alt={`Imagen de ${receta.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={ () => {
                            guardarIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose= {() => {
                            guardarIdReceta(null);
                            guardarReceta({});
                            handleClose();
                            
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{info.strDrink}</h2>
                            <h3 className="mt-4">
                                Instrucciones
                            </h3>
                            <p> {info.strInstructions}</p>
                            {/* eslint-disable-next-line */}
                            <img className="img-fluid my-4" src={info.strDrinkThumb} />

                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                { mostrarIngredientes(info) }
                            </ul>

                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;