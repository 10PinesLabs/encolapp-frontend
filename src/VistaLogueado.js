import Config from './Config';
import React, {Component} from 'react';
import './App.css';
import Hablando from './hablando/Hablando';
import PorHablar from './porHablar/PorHablar';
import Quiero from './quiero/Quiero';
import EncolappHeader from  './header/Header';
import {Grid, Message} from 'semantic-ui-react';

class VistaLogueado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hablando: {
                "nombre": "",
            },
            siguientes: [
                {"nombre": "Hardcoded 1"},
            ],
        };
    }

    actualizarCola(){
        fetch(Config.API_ENDPOINT + '/estado_actual', {method: 'GET'})
            .then(response => {
                return response.json();
            })
            .then(lista => {
                lista = lista.cola;
                if( lista.length === 0){
                    this.setState({
                        siguientes : [],
                        hablando :  {"nombre" : ''}
                    });
                    return;
                }

                this.setState({
                    hablando :  lista[0],
                    siguientes : lista.slice(1, lista.size)
                });
            }).catch().then(() => {
                this.actualizarCola();
            });
    }

    componentDidMount() {
        this.actualizarCola();
    }

    render() {
        return (
            <div className="App">
                <EncolappHeader soy={this.props.soy}/>
                <Grid centered>
                    <Grid.Row>
                        <Quiero soy={this.props.soy}/>
                    </Grid.Row>
                    <Grid.Row>
                        <Hablando quien={this.state.hablando}/>
                    </Grid.Row>
                    <Grid.Row>
                        <PorHablar esperando={this.state.siguientes}/>
                    </Grid.Row>
                    <Grid.Row>
                        <Message>
                            La lista de los que siguen puede demorar en actualizar, si nos regalas un pooling mas feliz sería menos confuso :)
                        </Message>
                    </Grid.Row>
                </Grid>


            </div>
        );
    }
}

export default VistaLogueado;