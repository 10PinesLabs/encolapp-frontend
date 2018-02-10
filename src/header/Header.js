import React, { Component} from 'react';
import { Label, Icon, Segment, Header } from 'semantic-ui-react';

export default class EncolappHeader extends Component {
    seQuienEs(){
        return this.props.soy && typeof  this.props.soy !== 'undefined' ;
    }

    renderHeaderConNombre(){
        return (
            <Segment>
                <Label attached='top'>
                    <Icon name='id badge'/>
                    {this.props.soy}
                </Label>
                <Header as='h1' className="ui header">EnColaPP</Header>
            </Segment>
        );
    }

    renderHeaderConLogin(){
        let blanco = {color: 'white'};
        return (
            <Segment inverted color='green'>
                <Header className="ui header" size='large' color='grey'>
                    <span style={blanco}>EnColaPP</span>
                </Header>
            </Segment>
        );
    }


    render() {
        if( this.seQuienEs()){
            return this.renderHeaderConNombre();
        }else{
            return this.renderHeaderConLogin();
        }



    }
}