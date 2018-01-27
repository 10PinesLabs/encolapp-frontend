import React from 'react'
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'

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
                <Grid
                    textAlign='center'
                    style={{height: '100%'}}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' textAlign='center'>Entrar</Header>
                        <Form size='large' onSubmit={(e) => this.handleOnSubmit(e)}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Soy'
                                    onChange={(e) => this.nombre =  e.target.value}
                                />
                                <Button color='blue' fluid size='large'>A la reunión!</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Esta es una aplicación que hicimos un sábado... asi que be nice :)
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>);
    }

}


