import React, {Component} from 'react';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";

export default class BotonParaEncolar extends Component {
  render() {
    return (<div className="Accion">
      <Button
        onClick={this.props.onQuiereHablar}
        size='huge'
        color='green'
        content="Quiero hablar"
        icon='unmute'
        labelPosition='left'
      />
    </div>)
  }
}