import React, { Component} from 'react';
import { Segment, Header } from 'semantic-ui-react';

export default class HeaderSinSpeaker extends Component {
    render() {
      return (
        <Segment inverted color='green'>
          <Header className="ui header" size='large' color='grey'>
            <span style={{color: 'white'}}>EnColaPP</span>
          </Header>
        </Segment>
      );
    }
}