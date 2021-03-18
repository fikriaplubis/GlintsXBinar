const twoD = require("./geometry/2D");
const threeD = require("./geometry/3D");

let trySquare = new twoD.Square(17);
trySquare.calculateArea();

let tryCube = new threeD.Cube(5);
tryCube.calculateVolume();
