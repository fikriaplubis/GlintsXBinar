const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function greet(name, address, birthday) {
  let age = 2021 - birthday;
  console.log("Hello "+name+", Looks like you're "+age+" years old, and you lived in "+address);
}

console.log("Goverment Registry\n");
// GET User's Name
rl.question("What is your name? ", (name) => {
  // GET User's Address
  rl.question("Which city do you live? ", (address) => {
    // GET User's Birthday
    rl.question("When was your birthday year? ", (birthday) => {
      greet(name, address, birthday);

      rl.close();
    });
  });
});

rl.on("close", () => {
  process.exit();
});
