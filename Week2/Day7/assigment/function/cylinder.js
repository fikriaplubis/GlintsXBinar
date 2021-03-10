const index = require("../index"); // Import index to run rl on this file

// Function to calculate Cylinder volume
function calculateCylinderVolume(r, t) {
  return t * Math.PI * r**2 ;
}

function inputCylinder() {
    index.rl.question("Jari-jari: ", (r) => {
      if (isNaN(r) || index.isEmptyOrSpaces(r)) {
          console.log(`Jari-jari must be a number\n`);
          inputCylinder();
      } else {
          index.rl.question("Tinggi: ", (t) => {
              if (isNaN(t) || index.isEmptyOrSpaces(t)) {
                  console.log(`Tinggi must be a number\n`);
                  inputCylinder();
              } else {
                  console.log(`\nCylinder Volume: ${calculateCylinderVolume(r, t)} \n`);
                  index.rl.close();
              }
          });
      }
    });
}

module.exports = { inputCylinder }; // Export the input, so the another file can run this codels