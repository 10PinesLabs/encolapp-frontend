import EventBus from 'vertx3-eventbus-client';
import Config from '../Config';
import Salon from '../model/Sala';
import Mensajes from '../cliente/Mensajes';

export default class ClienteDelBackend {
  constructor() {
    this.handlerPorCambioDeEstadoDeSala = null;
    this.eventBus = this.crearEventbus();
  }

  crearEventbus() {
    const direccionWebsockets = `${Config.API_ENDPOINT}/eventbus`;
    console.log(`Creando event bus a ${direccionWebsockets}`);

    return new Promise((resolve) => {
      const eventBus = new EventBus(direccionWebsockets);
      eventBus.enableReconnect(true);
      eventBus.onopen = () => {
        console.log('Conectado');
        eventBus.registerHandler(Mensajes.CAMBIOS_EN_SALA, this._onMensajeDeCambioDeEstadoDeSala.bind(this));
        resolve(eventBus);
      };
      eventBus.onreconnect = () => {
        console.log('Re-Conectado');
      };
    });
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

  observarSala(handler) {
    this.handlerPorCambioDeEstadoDeSala = handler;
  }

  ingresar(speaker) {
    return this.eventBus.then(bus => {
      bus.publish(Mensajes.ENTRAR_EN_SALA, this._comoString(speaker))
    });
  }

  salir(speaker) {
    return this.eventBus.then(bus => {
      bus.publish(Mensajes.SALIR_DE_SALA, this._comoString(speaker));
    });
  }

  encolar(speaker) {
    return this.eventBus.then(bus => {
      bus.publish(Mensajes.ENCOLAR, this._comoString(speaker));
    });
  }

  desencolar(speaker) {
    return this.eventBus.then(bus => {
      bus.publish(Mensajes.DESENCOLAR, this._comoString(speaker));
    });
  }

  redondear(ortiba, denso) {
      return this.eventBus.then(bus => {
          bus.publish(Mensajes.REDONDEAR, this._pedidoComoString(ortiba, denso));
      });
  }

  _comoString(speaker) {
    return JSON.stringify(speaker);
  }

  _pedidoComoString(origen, destino){
    let pedido = {};
    pedido.origen = origen;
    pedido.destinatario = destino;
    console.log(JSON.stringify(pedido));

    return JSON.stringify(pedido);
  }

}