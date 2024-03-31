// ATM machine should perform followin functions
// 1. Greets and asks for a pin and verify it
// 2. Adds options to select Withdraw funds, Check Balance, and exit
// 3. Showing the remaining balance amount after deduction of funds
// 4. If balance is low or 0, display a message about low funds or no funds

import inquirer from "inquirer";

let pinNumber: number = 1234;
let balance: number = 10000;
let pinAttempts: number = 3;

// PIN verification loop
for (pinAttempts; pinAttempts >= 0; pinAttempts--) {
    let pinVerify = await inquirer.prompt([{
        name: 'pin',
        type: 'number',
        message: '\tEnter a valid pin number to proceed:\t',
    }]);

    if (pinVerify.pin === pinNumber) {
        console.log('\n\tPin verified successfully!\t\n');
        break; // Exit the loop if PIN is verified
    } else {
        console.log('Invalid pin entered, try again!');
        if (pinAttempts === 0) {
            console.log('\tALERT: Your account is locked, contact your bank or call 1800-bank.');
            process.exit(); // End the program if PIN attempts are exhausted
        }
    }
}

// Transaction loop
while (true) {
    // Transaction menu
    let atmOptions = await inquirer.prompt([{
        message: 'Welcome! Select your desired option:',
        name: 'menu',
        type: 'list',
        choices: ['Cash Withdrawals', 'Rapid Cash', 'Balance Inquiry', 'End Session'],
    }]);

    if (atmOptions.menu === 'Cash Withdrawals') {
        let cashOut = await inquirer.prompt([{
            name: 'moneyout',
            type: 'number',
            message: '\tEnter your desired amount!\t',
        }]);
        if (cashOut.moneyout <= balance) {
            console.log(`\tTransaction successful! \n \tYour withdrawal amount is ${cashOut.moneyout}.`);
            console.log(`\tand your remaining balance is ${balance - cashOut.moneyout}.`);
        } else {
            console.log('\tAmount exceeds available balance or insufficient balance!\t');
        }
    } else if (atmOptions.menu === 'Balance Inquiry') {
        console.log(`\tYour available balance is ${balance}\t`);
    } else if (atmOptions.menu === 'End Session') {
        console.log('Thank you for using ATM services.');
        process.exit(); // End the program
    } else if (atmOptions.menu === 'Rapid Cash') {
        let rapidCash = await inquirer.prompt([{
            message: 'Select Rapid Cash for instant withdrawal!',
            name: 'rapidAmount',
            type: 'list',
            choices: [1000, 3000, 5000, 8000, 10000],
        }]);
        if (rapidCash.rapidAmount <= balance) {
            balance -= rapidCash.rapidAmount;
            console.log(`\tTransaction successful! \n\tYour remaining balance is ${balance}.`);
        } else {
            console.log('\tAmount exceeds available balance or insufficient balance!\t');
        }
    }
}





// let accountBalance: number  = 100000;
// let accountPin: number = 1234;
// let pinApproval = await inquirer.prompt(
//     [
//         {
//             name: "pin",
//             message: "Enter your pin number ",
//             type: "number"
//         }
//     ]
// );
// if (pinApproval.pin === accountPin)
// {
//      console.log("pin number matched");

//     let operationMenu = await inquirer.prompt(
//     [
//         {
//             name : "operation",
//             message : "Please select one option from the list ",
//             type: "list",
//             choices: ["withdraw cash", "check your balance", "fast cash"],

//         }
//     ]
// );


// if(operationMenu.operation === "withdraw cash"){ // choice mismatch
//     let amountAns = await inquirer.prompt(
//         [
//             {
//                 name: "amount",
//                 message: "Enter your required amount",
//                 type : "number",
//             }
//         ]
//     );
// if (amountAns.amount > accountBalance)
// {
//     console.log ("insufficient Balance");
// }
// else if (accountBalance -=  amountAns.amount)
// {

//     console.log(`your remaining balance   ${accountBalance}`); //you did not add back tick

// }
    
// };

//  if (operationMenu.operation === "check your balance") // choice mismatch
// {
//     console.log (`your balance is : ${accountBalance}`); //again no back ticks

// }

//  if (operationMenu.operation === "fast cash"){
//     let fast = await inquirer.prompt(
//      [{
//         name :"fast_opt",
//         message: "how much money you want to withdraw",
//         type: "list",
//         choices: ["1000", "2000", "5000", "10000"],

//      }]
//     );
//     if(fast.fast_opt <= accountBalance){
//         accountBalance -= fast.fast_opt;
//         console.log("The remaining balance is:", +accountBalance);
//     }
//     else{
//         console.log("you have insufficient balance");
//     }
//     }}
// else { // written under wrong branch
//     console.log ('invalid pin.')
// }