import Aperture from "aperture";
import Biosphere from "biosphere";
import Carriage from "carriage";

export default class Fanlight {
  constructor() {
    this.aperture = new Aperture();
    this.biosphere = new Biosphere();
    this.carriage = new Carriage();

    window.requestAnimationFrame(() => run());
  }

  run() {
    this.aperture.items = this.biosphere.player.serializeView();
  }
}