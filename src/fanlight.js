import Aperture from "aperture";
import { Biosphere, Gaia } from "biosphere";
import Carriage from "carriage";

export default class Fanlight {
  constructor(debug = false) {
    this.aperture = new Aperture({ yOrigin: document.body.clientHeight * 0.75});
    this.biosphere = new Biosphere();
    this.carriage = new Carriage();

    // TODO: MOVE THIS TO SERIALIZE VIEW PARAM
    this.biosphere.player.nearbyRange = this.aperture.canvas.width * 2;

    if (debug) {
      console.log("Starting fanlight in debug mode");
      window.fanlight = this;
      window.player = this.biosphere.player;
    }

    this._run();
  }

  _run() {
    // Send any user input to the player
    this.biosphere.updatePlayerInput(this.carriage.serialize());

    // Send any visible items to the view
    this.aperture.items = this.biosphere.getPlayerView();

    // TODO: Separate from animation
    window.requestAnimationFrame(() => this._run());
  }
}