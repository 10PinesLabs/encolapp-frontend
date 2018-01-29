import EventBus from 'vertx3-eventbus-client';

export default class ClienteDelBackend {
  constructor() {
    this.eventBus = this.crearEventbus();
    this.handlerPorCambioDeEstadoDeSala = null;
  }

  crearEventbus() {
    let direccionWebsockets = 'http://localhost:8080/eventbus';
    console.log(`Creando event bus a ${direccionWebsockets}`);
    let eventBus = new EventBus(direccionWebsockets);
    eventBus.onopen = () => {
      eventBus.registerHandler('auction.1.price', function (error, message) {
        console.log('EUR ' + JSON.parse(message.body));
      });
      eventBus.registerHandler('auction.1.bid', function (error, message) {
        console.log('New offer: EUR ' + JSON.parse(message.body).price + '\n');
      });
      eventBus.registerHandler('roots.salon.cambio', (error, message) => {
        console.log('Cambio de estado de salon');
        if (this.handlerPorCambioDeEstadoDeSala) {
          let nuevoEstado = JSON.parse(message.body);
          this.handlerPorCambioDeEstadoDeSala(nuevoEstado);
        } else {
          console.log('Ignorando por falta de handler')
        }
      });
    };
    return eventBus;
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