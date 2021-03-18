const Geometry = require("../geometry");

class ThreeDimention extends Geometry {
  constructor(name) {
    super(name, "3D");

    // Make abstract class
    if (this.constructor == ThreeDimention) {
      throw new Error("Can not make object!");
    }
  }

  // Overridding method
  introduce() {
    super.introduce();
    console.log(`This is ${this.type}`);
  }

  calculateVolume() {
    console.log(`${this.name} Volume!`);
  }
}

module.exports = ThreeDimention;
