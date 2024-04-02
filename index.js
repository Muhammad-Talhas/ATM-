#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
// In PKR
let myPin = 1234;
//************ FOR PIN **************
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
// Condition
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code");
    //************ FOR OPERATION **************
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    //************ FOR WITHDRAWL **************
    if (operationAnswer.operation === 'Withdraw') {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Sorry! Insufficient Balance for this transaction.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        ;
    }
    //************ FOR CHECK BALANCE **************
    else if (operationAnswer.operation === 'Check Balance') {
        console.log(`Your Current Balance is: ${myBalance}`);
    }
    //************ FOR FAST CASH **************
    else if (operationAnswer.operation === 'Fast Cash') {
        let fastCash = [
            { name: "1000", value: 1000 },
            { name: "2500", value: 2500 },
            { name: "5000", value: 5000 },
            { name: "10000", value: 10000 }
        ];
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select fast Cash Amount",
                type: "list",
                choices: fastCash,
            }
        ]);
        if (fastCashAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= fastCashAns.amount;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else {
        console.log("Incorrect Pin Code");
    }
    ;
}
;
