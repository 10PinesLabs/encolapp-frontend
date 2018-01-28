import React from 'react'
import {Button, Form, Grid, Message, Segment} from 'semantic-ui-react'
import HeaderEncolapp from '../header/Header';

export default class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.nombre = "";
    }

    handleOnSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.nombre);
        this.props.history.push('/cola')

    }
    render() {
        return (
            <div className='login-form'>
                <Grid textAlign='center'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <HeaderEncolapp />
                        <Form size='large' onSubmit={(e) => this.handleOnSubmit(e)}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Soy'
                                    onChange={(e) => this.nombre =  e.target.value}
                                />
                                <Button color='green' fluid size='large'>A la reunión!</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Con una aplicación rápida viene una gran responsabilidad...
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>);
    }

}


