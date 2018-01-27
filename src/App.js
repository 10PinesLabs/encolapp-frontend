import React, {Component} from 'react';
import './App.css';
import Hablando from './hablando/Hablando';
import PorHablar from './porHablar/PorHablar';
import Quiero from './quiero/Quiero';
import {Grid, Divider} from 'semantic-ui-react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hablando: {
                "nombre": "Lucas G",
                "para": 5
            },
            siguientes: [
                {"nombre": "Dario", "tiempo": 8},
                {"nombre": "Santi", "tiempo": 4},
                {"nombre": "Gaston", "tiempo": 2}
            ]
        }
    }


    componentDidMount() {
        fetch('http://encolapp-backend.herokuapp.com/cola', {method: 'GET'})
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

    render() {
        return (
            <div className="App">
                <h1 className="ui header">EnColaPP</h1>
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
                        <Quiero/>
                    </Grid.Row>
                </Grid>


            </div>
        );
    }
}

export default App;
