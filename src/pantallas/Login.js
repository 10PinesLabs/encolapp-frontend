import React from 'react'
import {Button, Form, Grid, Message, Segment} from 'semantic-ui-react'
import HeaderSinSpeaker from "../header/HeaderSinSpeaker";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nombre: ''};
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.onSpeakerDefinido({nombre: this.state.nombre});
  }

  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center'>
          <Grid.Column style={{maxWidth: 450}}>
            <HeaderSinSpeaker/>
            <Form size='large' onSubmit={(e) => this.handleOnSubmit(e)}>
              <Segment stacked>
                <Form.Input
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

}


