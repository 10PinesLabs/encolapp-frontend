import React, {Component} from 'react';
import {Card, Button, Label, Icon} from 'semantic-ui-react';

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
            <Card.Header>
                <Icon name="announcement"/>
                {this.props.speaker.nombre}
                <Label tag content={this.props.speaker.pedidosRedondeo} icon='history'/>
            </Card.Header>
          </Card.Content>

          <Card.Content extra>
            <div>
              <Button basic color='red' onClick={() => this.quitarSpeakerDeLaCola()} icon='remove user' content='Eject'/>
              <Button basic color='green' onClick={() => this.pedirSpeakerQueTermine()} icon='history' content='Redondeando!'/>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }

    quitarSpeakerDeLaCola() {
      this.props.cliente.desencolar(this.props.speaker);
    }

    pedirSpeakerQueTermine(){
        this.props.cliente.redondear(this.props.speaker);
    }
}

export default Hablando;