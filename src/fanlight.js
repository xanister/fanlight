import Aperture from "aperture";
import Biosphere from "biosphere";

export default class Fanlight {
  constructor() {
    this.aperture = new Aperture();
    this.biosphere = new Biosphere();
  }
}