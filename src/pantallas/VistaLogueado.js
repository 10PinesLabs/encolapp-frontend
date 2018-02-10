import React, {Component} from 'react';
import '../App.css';
import Hablando from '../secciones/Hablando';
import ColaDeEspera from '../secciones/ColaDeEspera';
import HeaderConSpeaker from '../header/HeaderConSpeaker';
import {Grid} from 'semantic-ui-react';
import BotonParaDesencolar from "../secciones/BotonParaDesencolar";
import BotonParaEncolar from "../secciones/BotonParaEncolar";
import {Sidebar, Segment, Menu} from 'semantic-ui-react'

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
                  <ColaDeEspera speakers={this.props.salon.speakersEnCola}/>
                </Grid.Row>
              </Grid>
            </div>

          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
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

  togglearPresentes() {
    this.setState({presentesVisibles: !this.state.presentesVisibles});
  }

  renderizarPresentes() {
    return this.props.salon.presentes.map(presente =>
      <Menu.Item name={presente.nombre}>
        {presente.nombre}
      </Menu.Item>
    );
  }
}

export default VistaLogueado;
