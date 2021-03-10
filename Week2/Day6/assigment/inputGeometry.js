const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

const pi = 3.14;

function calculateConeVolume(r, t) {
    let d = r ** 2;
    let v = (pi * d * t)/3;

    return v;
}

function input() {
    rl.question("Jari-jari: ", (r) => {
      if (isNaN(r) || isEmptyOrSpaces(r)) {
          console.log(`Error : Jari-jari must be a number!\n`);
          input();
      } else {
          rl.question("tinggi: ", (t) => {
              if (isNaN(t) || isEmptyOrSpaces(t)) {
                  console.log(`Error : Tinggi must be a number!\n`);
                  input();
              } else {
                  console.log(`\nCone Volume: ${calculateConeVolume(r, t)} \n`);
                  rl.close();
              }
          });
      }
    });
  } 

console.log(`Calculate Cone Volume`);
console.log(`===============`);
input();
