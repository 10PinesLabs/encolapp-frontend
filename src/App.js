import React, { Component } from 'react';
import './App.css';
import Hablando from './hablando/Hablando';
import PorHablar from './porHablar/PorHablar';
import Quiero from './quiero/Quiero';
import { Grid , Divider} from 'semantic-ui-react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hablando: {
                "nombre": "Lucas G",
                "para" : 5
            },
            siguentes: [
                {"nombre": "Dario", "tiempo": 8},
                {"nombre": "Santi", "tiempo": 4},
                {"nombre": "Gaston", "tiempo": 2}
            ]
        }
    }

  render() {
    return (
      <div className="App">
          <h1 className="ui header">EnColaPP</h1>
          <Divider />

          <Grid centered>
                  <Grid.Row >
                      <Hablando quien={this.state.hablando}/>
                  </Grid.Row>
                  <Grid.Row>
                      <Grid.Column>
                        <PorHablar esperando={this.state.siguentes}/>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                        <Quiero />
                  </Grid.Row>
          </Grid>


      </div>
    );
  }
}

export default App;
