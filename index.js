#! /usr/bin/env node
import inquirer from "inquirer";
console.log("***** S I G N   U P *****");
const input = await inquirer.prompt([
    {
        message: "Set your PIN",
        type: "number",
        name: "pin",
    },
    {
        message: "Set your Balance",
        type: "number",
        name: "balance",
    }
]);
console.log("***** L O G I N *****");
const output = await inquirer.prompt([
    {
        message: "Enter your PIN",
        type: "number",
        name: "pin_out",
    },
]);
if (output.pin_out === input.pin) {
    let i = 0;
    while (i == 0) {
        const atm = await inquirer.prompt([
            {
                message: "\nWhich operation you want to perfrom?",
                type: "list",
                choices: ["Withdraw", "Deposit", "Check Balance", "Exit"],
                name: "listing",
            }
        ]);
        if (atm.listing === "Withdraw") {
            console.log("Available Balance is ", input.balance);
            const atm = await inquirer.prompt([
                {
                    message: "Enter amount you want to withdraw:",
                    type: "number",
                    name: "draw",
                }
            ]);
            if (input.balance >= atm.draw) {
                input.balance = input.balance - atm.draw;
                console.log(`\n\tCurrent balance is ${input.balance}`);
            }
            else {
                console.log("\n\tTry entering less amount to withdraw, you don't have enough balance!");
            }
        }
        else if (atm.listing === "Deposit") {
            console.log(`Available balance is ${input.balance}`);
            const atm = await inquirer.prompt([
                {
                    message: "Enter amount you want to Deposit:",
                    type: "number",
                    name: "depo",
                }
            ]);
            input.balance = input.balance + atm.depo;
            console.log(`\n\tCurrent balance is ${input.balance}`);
        }
        else if (atm.listing == "Check Balance") {
            console.log(`\n\tCurrent balance is ${input.balance}`);
        }
        else if (atm.listing === "Exit") {
            i += 1;
        }
        else {
            console.log("Invalid operation");
        }
    }
}
else {
    console.log("Incorrect, PIN");
}
