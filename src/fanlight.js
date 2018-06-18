import Aperture from "aperture";
import Biosphere from "biosphere";
import Carriage from "carriage";

export default class Fanlight {
  constructor() {
    this.aperture = new Aperture({ yOrigin: document.body.clientHeight * 0.75});
    this.biosphere = new Biosphere();
    this.biosphere.universe.populate();
    this.biosphere.player.x = 1000;
    this.biosphere.player.nearbyRange = this.aperture.canvas.width;
    this.carriage = new Carriage();

    this._run();
  }

  _run() {
    // Send any user input to the player
    this.biosphere.player.inputs = this.carriage.serialize();

    // Send any visible items to the view
    this.aperture.items = this.biosphere.player.serializeView();
  
    // TODO: Separate from animation
    window.requestAnimationFrame(() => this._run());
  }
}