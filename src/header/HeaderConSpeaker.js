import React, {Component} from 'react';
import {Label, Icon, Segment, Header} from 'semantic-ui-react';

export default class HeaderConSpeaker extends Component {

  render() {
    return (
      <Segment>
        <Label attached='top' onClick={(event) => this.onTopLabelApretado(event)}>
          <Icon name='id badge'/>
          {this.props.speaker.nombre}
        </Label>
        <Header as='h1' className="ui header"> EnColaPP </Header>
      </Segment>
    );
  }

  onTopLabelApretado(event) {
    event.preventDefault();
    this.props.onPresentesApretado()
  }
}