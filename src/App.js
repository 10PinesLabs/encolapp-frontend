import React, {Component} from 'react';
import Login from './pantallas/Login';
import VistaLogueado from './pantallas/VistaLogueado';
import ClienteDelBackend from './cliente/ClienteDelBackend';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speaker: null,
      sala: null,
    };
    this.cliente = new ClienteDelBackend();
  }

  render() {
    if (!this.state.speaker) {
      return (
        <Login onSpeakerDefinido={(speaker) => this.ingresarASala(speaker)}/>
      );
    } else if (!this.state.sala) {
      return(
        <img src='https://i.makeagif.com/media/7-14-2015/QN3_hB.gif' width="100%" height="100%" alt="Aguanta"/>
      )
    } else {
      return(
        <VistaLogueado speaker={this.state.speaker} sala={this.state.sala} cliente={this.cliente}/>
      )
    }
  }

  ingresarASala(speaker) {
    this.cliente.ingresar(speaker).then(() => {
      this.cliente.observarSala((sala) => this.setState({sala: sala}));
      this.setState({speaker: speaker});
    });
  }
}