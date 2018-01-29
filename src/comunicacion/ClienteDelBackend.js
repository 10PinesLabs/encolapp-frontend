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

  ingresar(nombre) {
    this.eventBus.publish("roots.salon.entrar", this._comoSpeaker(nombre));
  }

  salir(nombre) {
    this.eventBus.publish("roots.salon.salir", this._comoSpeaker(nombre));
  }

  encolar(nombre) {
    this.eventBus.publish("roots.salon.encolar", this._comoSpeaker(nombre));
  }

  desencolar(nombre) {
    this.eventBus.publish("roots.salon.desencolar", this._comoSpeaker(nombre));
  }

  _comoSpeaker(nombre) {
    return JSON.stringify({nombre});
  }
}