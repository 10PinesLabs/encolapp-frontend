import React, {Component} from 'react';

import Hablar from './hablar/Hablar';
import Ingresar from './ingresar/Ingresar';


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
