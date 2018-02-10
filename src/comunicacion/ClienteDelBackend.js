import EventBus from 'vertx3-eventbus-client';
import Config from '../Config';
import Salon from '../Salon';

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
      console.log('Conectado');
      eventBus.registerHandler('roots.salon.cambio', this._onMensajeDeCambioDeEstadoDeSala.bind(this));
    };
    return eventBus;
  }

  _onMensajeDeCambioDeEstadoDeSala(error, message) {
    let body = message.body;
    console.log(`Cambio de estado de salon: ${body}`);
    if (this.handlerPorCambioDeEstadoDeSala) {
      let nuevoEstado = JSON.parse(body);
      this.handlerPorCambioDeEstadoDeSala(new Salon(nuevoEstado));
    } else {
      console.log('Ignorando por falta de handler')
    }
  }

  cuandoCambiaLaSala(handler) {
    this.handlerPorCambioDeEstadoDeSala = handler;
  }

  ingresar(speaker) {
    this.eventBus.publish("roots.salon.entrar", this._comoString(speaker));
  }

  salir(speaker) {
    this.eventBus.publish("roots.salon.salir", this._comoString(speaker));
  }

  encolar(speaker) {
    this.eventBus.publish("roots.salon.encolar", this._comoString(speaker));
  }

  desencolar(speaker) {
    this.eventBus.publish("roots.salon.desencolar", this._comoString(speaker));
  }

  _comoString(speaker) {
    return JSON.stringify(speaker);
  }
}