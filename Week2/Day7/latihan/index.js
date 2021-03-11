// Import readline
const { clear } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cone = require("./function/cone");
const cylinder = require("./function/cylinder");
const sphere = require("./function/sphere");

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

// Function to display the menu
function menu() {
  console.log(`\nMenu`);
  console.log(`====`);
  console.log(`1. Cone`);
  console.log(`2. Cylinder`);
  console.log(`3. Sphere`);
  console.log(`4. Exit`);
  rl.question(`Choose option: `, (option) => {
    if (!isNaN(option) && !isEmptyOrSpaces(option)) {
      // If option is a number it will go here
      if (option == 1) {
        cone.inputCone();
      } else if (option == 2) {
        cylinder.inputCylinder();
      } else if (option == 3) {
        sphere.inputSphere();
      } else if (option == 4) {
        rl.close(); // It will close the program
      } else {
        console.log(`Option must be 1 to 4!\n`);
        menu(); // If option is not 1 to 4, it will go back to the menu again
      }
    } else {
      // If option is not a number it will go here
      console.log(`Option must be number!\n`);
      menu(); // If option is not 1 to 4, it will go back to the menu again
    }
  });
}

menu(); // call the menu function to display the menu

module.exports.rl = rl; // export rl to make another can run the readline
module.exports.isEmptyOrSpaces = isEmptyOrSpaces;
module.exports.menu = menu; // Export the input, so the another file can run this codels