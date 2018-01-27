import React, { Component } from 'react';
import { List, Header, Container, Divider } from 'semantic-ui-react'

class PorHablar extends Component {
    listaPorHablar(esperando){
        return esperando.map( enEspera =>
            <List.Item key={enEspera.nombre}>
                <List.Icon name='github' size='large' />
                <List.Content>
                    <List.Header as='a'>{enEspera.nombre}</List.Header>
                </List.Content>
            </List.Item>
        );

    }
    render() {
        return (
            <div className="PorHablar">
                <Header
                    as='h3'
                    content='Siguen'
                    textAlign='center'
                />
                <Divider/>
                <Container>
                    <List divided relaxed size={'big'}>
                        {this.listaPorHablar(this.props.esperando)}
                    </List>
                </Container>
            </div>
        );
    }
}
export default PorHablar;