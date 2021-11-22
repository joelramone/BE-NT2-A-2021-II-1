import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(){
    super()

    this.state = {
      nombre: 'daniel'
    }

    console.log('MOUNT: este es el constructor')

  }


  render(){

    console.log('MOUNT: Este es el render')

    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Hola!! mi nombre es {this.state.nombre}
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
  }

  componentDidMount(){
    console.log('MOUNT: Aqui desde el componentDidMount')
  }





}

export default App;
