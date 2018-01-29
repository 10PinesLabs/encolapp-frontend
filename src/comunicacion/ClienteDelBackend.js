import EventBus from 'vertx3-eventbus-client';

export default class ClienteDelBackend {
  constructor() {
    this.eventBus = this.crearEventbus();
  }

  crearEventbus() {
    let direccionWebsockets = 'http://localhost:8080/eventbus';
    console.log(`Creando event bus a ${direccionWebsockets}`);
    let eventBus = new EventBus(direccionWebsockets);
    eventBus.onopen = function () {
      eventBus.registerHandler('auction.1.price', function (error, message) {
        console.log('EUR ' + JSON.parse(message.body));
      });
      eventBus.registerHandler('auction.1.bid', function (error, message) {
        console.log('New offer: EUR ' + JSON.parse(message.body).price + '\n');
      });
    };
    return eventBus;
  }
}