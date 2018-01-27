import React, { Component } from 'react';
import {Card, Button} from 'semantic-ui-react';

class Hablando extends Component {
    render() {
        return (
            <div className="Hablando">
                <Card>
                    <Card.Content>
                        <Card.Header>{this.props.quien.nombre}
                        </Card.Header>
                        <Card.Meta>Hablando</Card.Meta>
                        <Card.Description>
                            Pidieron que termine de hablar: <strong>{this.props.quien.para}</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>Redondeando</Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default Hablando;