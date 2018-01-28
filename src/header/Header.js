import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import { Label, Icon, Segment, Header } from 'semantic-ui-react';

export default class EncolappHeader extends Component {
    seQuienEs(){
        return this.props.soy && typeof  this.props.soy !== 'undefined' ;
    }

    renderHeaderConNombre(){
        return (
            <Segment raised>
                <Label attached='top'>
                    <Icon name='id badge'/>
                    {this.props.soy}
                </Label>
                <Header as='h1' className="ui header">EnColaPP</Header>
            </Segment>
        );
    }

    renderHeaderConLogin(){
        return (
            <Segment raised>
                <Header as='h1' className="ui header">
                    EnColaPP
                    <Link to='/login'> <Icon name='sign in' color='black'/> </Link>
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