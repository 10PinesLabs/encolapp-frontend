import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

class Hablando extends Component {
  render() {
    return (
      <div className="Hablando">
        <Card>
          <Card.Content>
            <Card.Meta>Hablando</Card.Meta>
            <Card.Header>{this.props.quien.nombre}</Card.Header>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Hablando;