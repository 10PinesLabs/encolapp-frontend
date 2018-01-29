import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

export default class Hablar extends Component {
    constructor(props){
        super(props);
        this.state= {
            accion : 'Quiero hablar!',
            proximo : 'Ya no quiero',
            evento: 'ENCOLARSE',
            buttonState:false
        };
    }

    handleClick(){
      let speaker = {
        nombre: this.props.soy
      };
        if(this.state.evento === 'ENCOLARSE'){
          this.props.cliente.encolar(speaker);
          this.setState({evento: 'DESENCOLARSE'});
        }else{
          this.props.cliente.desencolar(speaker);
          this.setState({evento: 'ENCOLARSE'});
        }
        this.setState({
            accion : this.state.proximo ,
            proximo: this.state.accion
        });
    }

    render() {
        return (
            <div className="Accion">
                <Button
                    onClick={() => this.handleClick()}
                    loading={this.state.buttonState}
                    size='huge' color='red' content={this.state.accion} icon='microphone' labelPosition='left'/>
            </div>
        );
    }
}