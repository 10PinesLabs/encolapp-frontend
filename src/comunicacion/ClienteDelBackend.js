import EventBus from 'vertx3-eventbus-client';
import Config from '../Config';

export default class ClienteDelBackend {
  constructor() {
    this.handlerPorCambioDeEstadoDeSala = null;
    this.eventBus = this.crearEventbus();
  }

  crearEventbus() {
    let direccionWebsockets = `${Config.API_ENDPOINT}/eventbus`;
    console.log(`Creando event bus a ${direccionWebsockets}`);

    let eventBus = new EventBus(direccionWebsockets);
    eventBus.onopen = () => {
      eventBus.registerHandler('roots.salon.cambio', this._onCambioDeEstadoDeSala.bind(this));
    };
    return eventBus;
  }

  _onCambioDeEstadoDeSala(error, message) {
    let body = message.body;
    console.log(`Cambio de estado de salon: ${body}`);
    if (this.handlerPorCambioDeEstadoDeSala) {
      let nuevoEstado = JSON.parse(body);
      this.handlerPorCambioDeEstadoDeSala(nuevoEstado);
    } else {
      console.log('Ignorando por falta de handler')
    }
  }

  cuandoCambiaLaSala(handler) {
    this.handlerPorCambioDeEstadoDeSala = handler;
  }

  encolar(speaker) {
    this.eventBus.publish("roots.salon.encolar", JSON.stringify(speaker));
  }

  desencolar(speaker) {
    this.eventBus.publish("roots.salon.desencolar", JSON.stringify(speaker));
  }

}