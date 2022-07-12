"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let number1 = Math.floor(Math.random() * 10 + 1);
let number2 = Math.floor(Math.random() * 10 + 1);
let answer = number1 + number2;

rl.question(
    `What is the value of ${number1} + ${number2} ? : `,
    (userInput) => {
        userInput.trim() == answer
            ? // close() will automatically closes the prompt and rl.on("close") will be executed
              rl.close()
            : rl.setPrompt("INCORRECT! Please try Again : ");
        rl.prompt();
        rl.on("line", (userInput) => {
            if (userInput.trim() == answer) {
                rl.close();
            } else {
                console.log(`Incorrect Answer! ${userInput}`);
                rl.prompt();
            }
        });
    }
);

rl.on("close", () => {
    console.log("CORRECT");
});
