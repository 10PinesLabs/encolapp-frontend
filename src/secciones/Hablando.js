import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';

class Hablando extends Component {
    constructor(props) {
        super(props);
        this.cliente = props.cliente;
    }

  render() {
    return (
      <div className="Hablando">
        <Card>
          <Card.Content>
            <Card.Meta>Hablando</Card.Meta>
            <Card.Header>{this.props.speaker.nombre}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red' onClick={() => this.quitarSpeakerDeLaCola()}>Eject</Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }

    quitarSpeakerDeLaCola() {
      this.props.cliente.desencolar(this.props.speaker);
    }
}

export default Hablando;