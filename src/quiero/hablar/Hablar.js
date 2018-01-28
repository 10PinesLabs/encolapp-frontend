import React, { Component} from 'react';
import Config from '../../Config';
import { Button} from 'semantic-ui-react';

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
        let url;
        if(this.state.evento === 'ENCOLARSE'){
            url = Config.API_ENDPOINT + '/encolarse';
            this.setState({evento : 'DESENCOLARSE'});
        }else{
            url = Config.API_ENDPOINT + '/desencolarse';
            this.setState({evento : 'ENCOLARSE'});
        }

        this.setState({buttonState: true});

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: this.props.soy
            })
        }).catch().then(
            () => this.setState({buttonState: false})
        );

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