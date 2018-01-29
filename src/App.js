import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './login/Login';
import VistaLogueado from './VistaLogueado';
import EventBus from 'vertx3-eventbus-client';

let eventBus = new EventBus('http://localhost:8080/eventbus');
eventBus.onopen = function () {
  eventBus.registerHandler('auction.1.price', function (error, message) {
    console.log('EUR ' + JSON.parse(message.body));
  });
  eventBus.registerHandler('auction.1.bid', function (error, message) {
    console.log('New offer: EUR ' + JSON.parse(message.body).price + '\n');
  });
};

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
                               <Login {...props} onSubmit={(nombre) => this.handleLogin(nombre)} />}
                    />
                    <Route exact path="/login"
                           render = {(props) =>
                               <Login {...props} onSubmit={(nombre) => this.handleLogin(nombre)} />}
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