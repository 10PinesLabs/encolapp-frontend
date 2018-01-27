import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './login/Login';
import Contenido from './Contenido'

class App extends Component {
    render() {
        return (

            <Router>
                <div>
                    <Route path="/" component={Contenido}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
