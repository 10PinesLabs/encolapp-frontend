import React, {Component} from 'react';
import {Button, Label, Icon, Header, Segment} from 'semantic-ui-react';

class Hablando extends Component {
    constructor(props) {
        super(props);
        this.cliente = props.cliente;
    }

  render() {
    return (
      <div className="Hablando">
        <Segment.Group compact>
          <Segment size="small">
              <Header as='h3' floated='right' size="small">
                  <Button as='div' labelPosition='right'>
                      <Button icon>
                          <Icon
                              name="remove user"
                              color="grey"
                              onClick={() => this.quitarSpeakerDeLaCola()}
                          />
                      </Button>
                      <Label as='a' basic pointing='left'>Eject</Label>
                  </Button>

              </Header>
          </Segment>
            <Segment>
              <Header as='h2' floated='left'>
                  <Icon name="announcement" bordered circular />
                  {this.props.speaking.nombre}
              </Header>
          </Segment>
          {this.mostrarPedidosRedondeosSiHay()}
          <Segment>
            <Button basic color='green' onClick={() => this.pedirSpeakerQueTermine()} icon='history' content='Redondeando!'/>
        </Segment>
        </Segment.Group>
      </div>
    );
  }

  mostrarPedidosRedondeosSiHay() {
    if (this.props.speaking.pedidosRedondeo){
          return (
            <Segment>
              <Label content={this.props.speaking.pedidosRedondeo} icon='history' size="huge" color="grey"/>
            </Segment>
          );
    }
  }

    quitarSpeakerDeLaCola() {
      this.props.cliente.desencolar(this.props.speaking);
    }

    pedirSpeakerQueTermine(){
        this.props.cliente.redondear(this.props.speaker, this.props.speaking);
    }
}

export default Hablando;