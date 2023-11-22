// 1-stdin.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Holberton School, what is your name?");

rl.on("line", (name) => {
  if (name.trim() !== "") {
    console.log(`Your name is: ${name}`);
  } else {
    console.log("Your name is not provided.");
  }

  // Close the program
  console.log("This important software is now closing");
  rl.close();
});
