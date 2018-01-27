import React, { Component } from 'react';

class Hablando extends Component {
    render() {
        return (
            <div className="Hablando">
                <p> Hablando: </p>
                <span>{this.props.quien.nombre}</span>
            </div>
        );
    }
}

export default Hablando;