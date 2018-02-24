import React from 'react'
import {Button, Form, Grid, Message, Segment} from 'semantic-ui-react'
import HeaderSinSpeaker from "../header/HeaderSinSpeaker";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.intentarRecuperarNombreDeLocalStorage()
    };
  }

  handleOnSubmit(e) {
    e.preventDefault();
    let nombreElegido = this.state.nombre;
    this.intentarAlmacenarNombreEnLocalStorage(nombreElegido);
    this.props.onSpeakerDefinido({nombre: nombreElegido});
  }

  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{maxWidth: 380}}>
            <HeaderSinSpeaker/>
            <Form size='large' onSubmit={(e) => this.handleOnSubmit(e)}>
              <Segment stacked>
                <Form.Input
                  value={this.state.nombre}
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Soy'
                  onChange={(e) => this.setState({nombre: e.target.value.trim()})}
                />
                <Button disabled={!this.state.nombre} color='olive' fluid size='large'>A la reunión!</Button>
              </Segment>
            </Form>
            <Message>
              Con una aplicación rápida viene una gran responsabilidad...
            </Message>
          </Grid.Column>
        </Grid>
      </div>);
  }

  intentarRecuperarNombreDeLocalStorage() {
    if (localStorage) {
      let nombreAlmacenado = localStorage.getItem("nombreDeSpeaker");
      return nombreAlmacenado || '';
    }
    return undefined;
  }

  intentarAlmacenarNombreEnLocalStorage(nombre) {
    localStorage.setItem("nombreDeSpeaker", nombre);
  }

}


