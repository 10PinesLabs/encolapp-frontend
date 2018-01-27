import React, { Component } from 'react';

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
                <button onClick={() => this.handleClick()}>{this.state.accion}</button>
            </div>
        );
    }

}
export default Quiero;