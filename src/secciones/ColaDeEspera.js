import React, {Component} from 'react';
import {Grid, Header, Container, Divider, Segment} from 'semantic-ui-react'
import Identicon from './IdentIcon';

class ColaDeEspera extends Component {
  listaPorHablar(speakers) {
    return speakers.map(enEspera =>
        <Grid.Row>
            <Grid.Column width={3}>
                <Identicon id={enEspera.nombre} width={20} size={3} />
            </Grid.Column>
            <Grid.Column width={13}>
                {enEspera.nombre}
            </Grid.Column>
        </Grid.Row>
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
              <Grid celled>
                  {this.listaPorHablar(this.speakersEnEspera())}
              </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default ColaDeEspera;