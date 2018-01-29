import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './login/Login';
import VistaLogueado from './VistaLogueado';
import ClienteDelBackend from './comunicacion/ClienteDelBackend';

let cliente = new ClienteDelBackend();

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          usuario : ''
        };
    }

    handleLogin(nombre){
        this.setState({usuario : nombre});
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/"
                           render = {(props) =>
                             <Login {...props} cliente={cliente} onSubmit={(nombre) => this.handleLogin(nombre)}/>}
                    />
                    <Route exact path="/login"
                           render = {(props) =>
                             <Login {...props} cliente={cliente} onSubmit={(nombre) => this.handleLogin(nombre)}/>}
                    />
                    <Route exact path="/cola"
                            render = {(props) =>
                                <VistaLogueado {...props} soy={this.state.usuario}  />}
                    />
                </div>
            </Router>
        );
    }
}