import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Quiero extends Component {
    constructor(props){
        super(props);
        this.state= {
            accion : 'Quiero hablar!',
            proximo : 'Ya no quiero'
        };
    }

    handleClick(){
        this.setState({
            accion : this.state.proximo ,
            proximo: this.state.accion
        });
    }

    render() {
        return (
            <div className="Accion">
                <Button primary onClick={() => this.handleClick()}>{this.state.accion}</Button>
            </div>
        );
    }

}
export default Quiero;