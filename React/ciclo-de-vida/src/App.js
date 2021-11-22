import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import Counter from "./components/Contador";

function App() {

  const [nombre, setNombre] = useState('NT2 Belgrano')
  const [edad, setEdad] = useState(30)

  const [running, setRunning] = useState(true)


  useEffect(()=>{
    // Este seria el equivalente al componentDidMount  del ciclo de vida MOUNT
    console.log('Hola mundo! Aqui me ejecuto por 1era vez')

    // return () => {
    //   // Este seria el equivalente al componentWillUnmount del ciclo de vida UNMOUNT
    //   console.log('Aqui me ejecutro cuando este componente deja de estar visible en la UI. Cuando me dstruyo')
    // }

  }, [])

  useEffect(()=> {
    console.log('Aqui me ejecuto cada vez que actualizo el estado nombre', nombre)
  }, [nombre])

  useEffect(()=> {
    console.log('Aqui me ejecuto cada vez que actualizo el estado edad', edad)
  }, [edad])

  useEffect(()=> {
    console.log('Aqui me ejecuto cada vez que actualizo el estado nomnbre y/o edad', {nombre, edad})
  }, [nombre, edad])




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola equipo de {nombre}, tengo {edad} años
        </p>
        

        <Counter running={running} />


        {/* <button type="button" onClick={() => setNombre('Daniel')}>Cambiar el nombre</button>
        <button type="button" onClick={() => setEdad(40)}>Cambiar la edad</button> */}


        <button type="button" onClick={() => setRunning(prev => !prev)}>{(running)? 'STOP' : 'PLAY'}</button>
      </header>
    </div>
  );
}



export default App;
