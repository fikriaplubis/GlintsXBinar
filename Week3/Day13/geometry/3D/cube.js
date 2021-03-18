const ThreeDimention = require("./threeDimention");

class Cube extends ThreeDimention {
  constructor(base) {
    super("Cube");
    this.base = base;
  }

  // Overloading method
  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }

  // Overridding
  calculateVolume() {
    super.calculateVolume();
    let volume = this.base ** 3;
    console.log(`This volume is ${volume} cm3 \n`);
  }
}

module.exports = Cube;
