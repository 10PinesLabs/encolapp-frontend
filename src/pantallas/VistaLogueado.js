import React, {Component} from 'react';
import '../App.css';
import Hablando from '../secciones/Hablando';
import ColaDeEspera from '../secciones/ColaDeEspera';
import HeaderConSpeaker from '../header/HeaderConSpeaker';
import {Grid} from 'semantic-ui-react';
import BotonParaDesencolar from "../secciones/BotonParaDesencolar";
import BotonParaEncolar from "../secciones/BotonParaEncolar";

class VistaLogueado extends Component {
  constructor(props) {
    super(props);
    this.cliente = props.cliente;
    this.state = {
      hablando: {
        "nombre": "",
      },
      siguientes: [
        {"nombre": "Sin pinos en la sala"},
      ],
    };
  }


  onCambioDeEstadoDelSalon(nuevoEstadoDeSala) {
    let lista = nuevoEstadoDeSala.cola;
    if (lista.length === 0) {
      this.setState({
        siguientes: [],
        hablando: {"nombre": ''}
      });
      return;
    }

    this.setState({
      hablando: lista[0],
      siguientes: lista.slice(1, lista.size)
    });
  }

  render() {
    return (
      <div className="App">
        <HeaderConSpeaker speaker={this.props.speaker}/>
        <Grid centered>
          <Grid.Row>
            {this.mostrarBotonQueCorresponde()}
          </Grid.Row>
          {this.mostrarSpeakerActualSiExiste()}
          <Grid.Row>
            <ColaDeEspera speakers={this.props.salon.speakersEnCola}/>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  mostrarBotonQueCorresponde() {
    if (this.props.salon.estaEnCola(this.props.speaker)) {
      return (
        <BotonParaDesencolar onYaNoQuiereHablar={() => this.quitarSpeakerDeLaCola()}/>
      )
    } else {

      return (
        <BotonParaEncolar onQuiereHablar={() => this.agregarSpeakerALaCola()}/>
      )
    }
  }

  agregarSpeakerALaCola() {
    this.cliente.encolar(this.props.speaker);
  }

  quitarSpeakerDeLaCola() {
    this.cliente.desencolar(this.props.speaker);
  }

  mostrarSpeakerActualSiExiste() {
    if (this.props.salon.speakerActual) {
      return (
        <Grid.Row>
          <Hablando quien={this.props.salon.speakerActual}/>
        </Grid.Row>
      );
    }
  }
}

export default VistaLogueado;
