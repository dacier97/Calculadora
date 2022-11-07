import React from "react";
import '../hojas-de-estilo/boton.css'

function Boton(props){


  const esOperador = valor =>{

    return isNaN(valor) && (valor !=='.') && (valor !=='=');
  };

  if(esOperador(props.children)){

    return(

        <button
          className= 'boton-contenedor operador'
          onClick = {() => props.manejarClic(props.children)}>
          {props.children}
        </button>
    );
    } 
    else{

      return(

        <div 
          className= 'boton-contenedor'
          onClick = {() => props.manejarClic(props.children)}>
          {props.children}
        </div>
    );

    }


  }

  /*return(

    <div className={`boton-contenedor ${esOperador(props.children)? 'operador':''}`.trimEnd()} onClick = {() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )*/

export default Boton;