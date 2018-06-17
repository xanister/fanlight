import Aperture from "aperture";
import Biosphere from "biosphere";
import Carriage from "carriage";

export default class Fanlight {
  constructor() {
    this.aperture = new Aperture();     // Manages view
    this.biosphere = new Biosphere();   // Manages world
    this.carriage = new Carriage();     // Manages user input

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