import React, { Component } from 'react';

class PorHablar extends Component {
    listaPorHablar(esperando){
        return esperando.map( enEspera =>
            <div key={enEspera.nombre}>{enEspera.nombre}</div>
        );

    }
    render() {
        return (
            <div className="PorHablar">
                <p> Aca va la lista de los que quieren hablar</p>
                {this.listaPorHablar(this.props.esperando)}
            </div>
        );
    }
}
export default PorHablar;