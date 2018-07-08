import Aperture from "aperture";
import { Biosphere, Gaia } from "biosphere";
import Carriage from "carriage";

export default class Fanlight {
  constructor(debug = false) {
    this.aperture = new Aperture({ yOrigin: document.body.clientHeight * 0.75});
    this.biosphere = new Biosphere();
    Gaia.populate(this.biosphere.universe);
    this.biosphere.player.nearbyRange = this.aperture.canvas.width;
    this.carriage = new Carriage();

    if (debug) {
      window.fanlight = this;
      window.player = this.biosphere.player;
    }

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