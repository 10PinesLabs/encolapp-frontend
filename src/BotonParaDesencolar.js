import React, {Component} from 'react';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";

export default class BotonParaDesencolar extends Component {
  render() {
    return (<div className="Accion">
      <Button
        onClick={this.props.onYaNoQuiereHablar}
        size='huge'
        color='red'
        content="Ya no quiero"
        icon='mute'
        labelPosition='left'
      />
    </div>)
  }
}