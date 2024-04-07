#! /usr/bin/env node
import inquirer from "inquirer";
// 1. computer will generate a random number - Done
// 2. computer will ask the user to guess the random number - Done
// compare user input with computer generated random number and show the result -Done
console.log("Welcome to  'alishbarafiq' CLI-Number-Guessing-Game!");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
// conditional statements 
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congrats! You got it!");
}
else {
    console.log("Sorry, try again!");
}
