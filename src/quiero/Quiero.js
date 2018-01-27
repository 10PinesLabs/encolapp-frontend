import Config from '../Config';
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Quiero extends Component {
    constructor(props){
        super(props);
        this.state= {
            accion : 'Quiero hablar!',
            proximo : 'Ya no quiero',
            evento: 'ENCOLARSE'

        };
    }

    handleClick(){
        var url;
        if(this.state.evento === 'ENCOLARSE'){
            url = Config.API_ENDPOINT + '/encolarse';
            this.setState({evento : 'DESENCOLARSE'});
        }else{
            url = Config.API_ENDPOINT + '/desencolarse';
            this.setState({evento : 'ENCOLARSE'});
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: this.props.soy
            })
        });

        this.setState({
            accion : this.state.proximo ,
            proximo: this.state.accion
        });
    }

    render() {
        return (
            <div className="Accion">
                <Button primary onClick={() => this.handleClick()} size={'massive'}>{this.state.accion}</Button>

            </div>
        );
    }

}
export default Quiero;
