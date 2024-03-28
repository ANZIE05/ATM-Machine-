#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 8520;
let pin_check = await inquirer.prompt([
    { message: "Enter your pin", type: "number", name: "pin" },
]);
if (pin_check.pin === myPin) {
    let operation = await inquirer.prompt([
        { message: "Please select one", type: "list", name: "list", choices: ['withdraw', 'check balance'] },
    ]);
    if (operation.list === 'withdraw') {
        let amount = await inquirer.prompt([
            { message: "Enter your amount", type: "number", name: "amount" },
        ]);
        if (amount.amount <= myBalance && amount.amount >= 500) {
            myBalance -= amount.amount;
            console.log("Your remaining balance is " + myBalance);
        }
        else {
            console.log("Invalid amount");
        }
    }
    else if (operation.list === 'check balance') {
        console.log("Your balance is " + myBalance);
    }
}
else {
    console.log("Invalid pin");
}
