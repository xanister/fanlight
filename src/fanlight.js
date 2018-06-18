import Aperture from "aperture";
import Biosphere from "biosphere";
import Carriage from "carriage";

export default class Fanlight {
  constructor() {
    this.aperture = new Aperture({ yOrigin: document.body.clientHeight * 0.75});
    this.biosphere = new Biosphere();
    this.carriage = new Carriage();

    this.run();
  }

  run() {
    // Send any user input to the player
    this.biosphere.player.inputs = this.carriage.serialize();

    // Send any visible items to the view
    this.aperture.items = this.biosphere.player.serializeView();
  
    window.requestAnimationFrame(() => this.run());
  }
}