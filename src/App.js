import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hablando from './hablando/Hablando';
import PorHablar from './porHablar/PorHablar';
import Quiero from './quiero/Quiero';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hablando: {
                "nombre": "Lucas G",
            },
            siguentes: [
                {"nombre": "Dario"},
                {"nombre": "Santi"},
                {"nombre": "Gaston"}
            ]
        }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a mis Colas</h1>
        </header>
        <Hablando quien={this.state.hablando}/>
        <PorHablar esperando={this.state.siguentes}/>
        <Quiero />

      </div>
    );
  }
}

export default App;
