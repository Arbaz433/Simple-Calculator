#! /usr/bin/env node
import inquirer from "inquirer";
// Printing A Wellcome Messege
console.log("\n\Wellcome To \ `Arbaz_Ali\` - CLI Simple Calculator\n");
// asking questions from user through inquirer
let answer = await inquirer.prompt([
    { messege: "Enter First Number", type: "number", name: "firstNumber" },
    { messege: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statements if/else
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
