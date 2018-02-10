import React, {Component} from 'react';
import Login from './login/Login';
import VistaLogueado from './VistaLogueado';
import ClienteDelBackend from './comunicacion/ClienteDelBackend';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speaker: null,
      salon: null,
    };
    this.cliente = new ClienteDelBackend();
  }

  render() {
    if (!this.state.speaker) {
      return (
        <Login onSpeakerDefinido={(speaker) => this.ingresarASala(speaker)}/>
      );
    } else if(!this.state.salon) {
      return(
        <img src='https://i.makeagif.com/media/7-14-2015/QN3_hB.gif' width="100%" height="100%" alt="Aguanta"/>
      )
    } else {
      return(
        <VistaLogueado speaker={this.state.speaker} salon={this.state.salon} cliente={this.cliente}/>
      )
    }
  }

  ingresarASala(speaker) {
    this.cliente.cuandoCambiaLaSala((salon) => this.setState({salon: salon}));
    this.cliente.ingresar(speaker);
    return this.setState({speaker: speaker});
  }
}