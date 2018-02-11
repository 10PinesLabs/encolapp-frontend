import React, {Component} from 'react';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";

export default class BotonDeAccion extends Component {
  render() {
    return (<div className="Accion">
      <Button
        onClick={this.props.opciones.onBotonApretado}
        size='huge'
        color={this.props.opciones.color}
        content={this.props.opciones.label}
        icon={this.props.opciones.icon}
        labelPosition='left'
      />
    </div>)
  }
}