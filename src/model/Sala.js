export default class Salon {
  constructor(estadoDeSalon){
    this.presentes = estadoDeSalon.presentes;
    this.cola = estadoDeSalon.cola;

    let prioridadDeSpeakers = estadoDeSalon.cola;
    this.speakerActual = prioridadDeSpeakers[0];
    this.speakersEnCola = prioridadDeSpeakers.slice(1, prioridadDeSpeakers.length);
  }

  estaEnCola(speaker) {
    return this.cola.some((speakerEnCola)=> speakerEnCola.nombre === speaker.nombre);
  }

  estaHablando(speaker) {
    return this.speakerActual && this.speakerActual.nombre === speaker.nombre;
  }

}