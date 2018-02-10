import React, {Component} from 'react';

export default class Quiero extends Component {
    seQuienEs(){
        return this.props.soy !== '';
    }

    render() {
        if(this.seQuienEs()){
          return <Hablar soy={this.props.soy} cliente={this.props.cliente}/>;
        }else{
            return <Ingresar/>
        }
    }

}
