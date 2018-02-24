import React, {Component} from 'react';
import '../App.css';
import Hablando from '../secciones/Hablando';
import ColaDeEspera from '../secciones/ColaDeEspera';
import HeaderConSpeaker from '../header/HeaderConSpeaker';
import {Grid} from 'semantic-ui-react';
import {Sidebar, Segment, Menu} from 'semantic-ui-react'
import BotonDeAccion from "../secciones/BotonDeAccion";

class VistaLogueado extends Component {
  constructor(props) {
    super(props);
    this.cliente = props.cliente;
    this.state = {
      presentesVisibles: false
    };
  }

  render() {
    return (

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          width='thin'
          direction='right'
          visible={this.state.presentesVisibles}
          icon='labeled'
          vertical
          inverted
        >
          {this.renderizarPresentes()}
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>

            <div className="App">
              <HeaderConSpeaker speaker={this.props.speaker} onPresentesApretado={()=> this.togglearPresentes()} />
              <Grid centered>
                <Grid.Row>
                  {this.mostrarBotonQueCorresponde()}
                </Grid.Row>
                {this.mostrarSpeakerActualSiExiste()}
                <Grid.Row>
                  <ColaDeEspera speakers={this.props.sala.speakersEnCola}/>
                </Grid.Row>
              </Grid>
            </div>

          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }

  mostrarBotonQueCorresponde() {
    let opcionesDelBoton;
    if (this.props.sala.estaHablando(this.props.speaker)) {
      opcionesDelBoton = {
        onBotonApretado: () => this.quitarSpeakerDeLaCola(),
        color: 'red',
        label: 'Terminé',
        icon: 'mute'
      };
    } else if (this.props.sala.estaEnCola(this.props.speaker)) {
      opcionesDelBoton = {
        onBotonApretado: () => this.quitarSpeakerDeLaCola(),
        color: 'red',
        label: 'Ya no quiero',
        icon: 'mute'
      };
    } else {
      opcionesDelBoton = {
        onBotonApretado: () => this.agregarSpeakerALaCola(),
        color: 'green',
        label: 'Quiero hablar',
        icon: 'unmute'
      };
    }
    return (
      <BotonDeAccion opciones={opcionesDelBoton}/>
    )
  }

  agregarSpeakerALaCola() {
    this.cliente.encolar(this.props.speaker);
  }

  quitarSpeakerDeLaCola() {
    this.cliente.desencolar(this.props.speaker);
  }

  mostrarSpeakerActualSiExiste() {
    if (this.props.sala.speakerActual) {
      return (
        <Grid.Row>
          <Hablando speaker={this.props.speaker} speaking={this.props.sala.speakerActual} cliente={this.props.cliente} />
        </Grid.Row>
      );
    }
  }

  togglearPresentes() {
    this.setState({presentesVisibles: !this.state.presentesVisibles});
  }

  renderizarPresentes() {
    return this.props.sala.presentes.map(presente =>
      <Menu.Item key={presente.nombre}>
        {presente.nombre}
      </Menu.Item>
    );
  }
}

export default VistaLogueado;
