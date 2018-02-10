import React, {Component} from 'react';
import {List, Header, Container, Divider, Segment} from 'semantic-ui-react'

class ColaDeEspera extends Component {
  listaPorHablar(speakers) {
    return speakers.map(enEspera =>
      <List.Item key={enEspera.nombre}>
        <List.Icon name='tree' size='large' color='green'/>
        <List.Content>
          <List.Header>{enEspera.nombre}</List.Header>
        </List.Content>
      </List.Item>
    );

  }

  speakersEnEspera() {
    return this.props.speakers;
  }

  render() {
    return (
      <div className="PorHablar">
        <Segment padded compact color='olive' textAlign='center'>
          <Header
            as='h3'
            content='Siguen'
          />
          <Divider/>
          <Container>
            <List divided relaxed size={'big'}>
              {this.listaPorHablar(this.speakersEnEspera())}
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default ColaDeEspera;