const index = require("../index"); // Import index to run rl on this file

// Function to calculate cube volume
function calculateConeVolume(r, t) {
  return 0.333 * Math.PI * r**2 *t;
}

// Function to input the length
function inputCone() {
  index.rl.question("Jari-jari: ", (r) => {
    if (isNaN(r) || index.isEmptyOrSpaces(r)) {
        console.log(`Jari-jari must be a number\n`);
        inputCone();
    } else {
        index.rl.question("Tinggi: ", (t) => {
            if (isNaN(t) || index.isEmptyOrSpaces(t)) {
                console.log(`Tinggi must be a number\n`);
                inputCone();
            } else {
                console.log(`\nCone Volume: ${calculateConeVolume(r, t)} \n`);
                console.log(`1. Continue`);
                console.log(`2. Exit`);
                index.rl.question(`Continue / Exit ? `, (answer) => {
                    if(answer == 1){
                        index.menu();
                    } else {
                        index.rl.close();
                    }
                });
            }
        });
    }
  });
}

module.exports = { inputCone }; // Export the input, so the another file can run this codels