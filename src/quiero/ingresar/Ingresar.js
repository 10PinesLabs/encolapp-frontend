import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import { Label, Icon } from 'semantic-ui-react';

export default class Ingresar extends Component {
    render() {
        return (
            <div>
                <Label color='green' size='massive'>
                    <Link to={'/login'}>
                        Para hablar
                        <Icon name='sign in'/>
                    </Link>
                </Label>
            </div>
        );
    }
}