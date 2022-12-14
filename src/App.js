import freeCodeCampLogo from './imagenes/LogoC.png'
import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input,setinput] = useState('');

  const agregarInput = val =>{
    setinput(input + val);
  };

  const calcularResultado = () =>{

    if(input){
      setinput(evaluate(input));
    } else {
    alert('ingrese valor numerico');
  }
}

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>

        <img
        src = {freeCodeCampLogo} className='freecodecamp-logo'
        alt='Logo de Freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>

        <Pantalla input={input}/>

          <div className='fila'> 
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>

            <BotonClear manejarClear={() => setinput('')}>
              
              Clear
              
            </BotonClear>
          </div>

      </div>
    </div>
  );
}
export default App;
