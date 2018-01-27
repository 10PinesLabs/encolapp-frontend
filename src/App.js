import React, {Component} from 'react';
import './App.css';
import Hablando from './hablando/Hablando';
import PorHablar from './porHablar/PorHablar';
import Quiero from './quiero/Quiero';
import {Grid, Divider, Header} from 'semantic-ui-react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hablando: {
                "nombre": "Hardcoded 1",
                "para": 5
            },
            siguientes: [
                {"nombre": "Hardcoded 1", "tiempo": 8},
                {"nombre": "Hardcoded 2", "tiempo": 4},
                {"nombre": "Hardcoded 3", "tiempo": 2}
            ],
            yo: {"nombre": "Ludat"}
        };
        window.setInterval(() => this.actualizarCola(), 10000);

    }

    actualizarCola(){
        fetch('https://encolapp-backend.herokuapp.com/cola', {method: 'GET'})
            .then(response => {
                return response.json();
            })
            .then(lista => {
                if( lista.size === 0){
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
            });
    }

    componentDidMount() {
        this.actualizarCola();
    }

    render() {
        return (
            <div className="App">
                <Header as='h1' className="ui header">EnColaPP</Header>
                <Divider/>

                <Grid centered>
                    <Grid.Row>
                        <Hablando quien={this.state.hablando}/>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <PorHablar esperando={this.state.siguientes}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Quiero soy={this.state.yo}/>
                    </Grid.Row>
                </Grid>


            </div>
        );
    }
}

export default App;
