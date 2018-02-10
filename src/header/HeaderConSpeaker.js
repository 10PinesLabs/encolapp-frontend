import React, {Component} from 'react';
import {Label, Icon, Segment, Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class HeaderConSpeaker extends Component {
  static propTypes = {
    speaker: PropTypes.shape({
      nombre: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    return (
      <Segment>
        <Label attached='top'>
          <Icon name='id badge'/>
          {this.props.speaker.nombre}
        </Label>
        <Header as='h1' className="ui header">EnColaPP</Header>
      </Segment>
    );
  }
}