const index = require("../index")

function calculateSphereVolume(rad) {
    let spherevolume = (4/3) * Math.PI * Math.pow(rad, 3);
    return spherevolume;
} 

function inputSphere() {
    index.rl.question(`Radius: `, (rad) => {
      if (!isNaN(rad) && !index.isEmptyOrSpaces(rad)) {
        console.log(`Sphere's volume is ${calculateSphereVolume(rad)} cm3\n`);
        index.rl.close();
      } else {
        console.log(`Radius must be number`);
        inputSphere();
      }
    });
}
  
  module.exports ={ inputSphere } ; // Export the input, so the another file can run this code
