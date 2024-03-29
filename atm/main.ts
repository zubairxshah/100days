// ATM machine should perform followin functions
// 1. Greets and asks for a pin and verify it
// 2. Adds options to select Withdraw funds, Check Balance, and exit
// 3. Showing the remaining balance amount after deduction of funds
// 4. If balance is low or 0, display a message about low funds or no funds

import inquirer from "inquirer";
let pinNumber = 1234;
let balance = 10000;
let pinVerify = await inquirer.prompt ([{
    name : 'pin',
    type : 'number',
    message : '\tEnter a valid pin number to proceed:\t',
}]);

// setting conditions to verify the pin and proceeding to options
// Some options like Rapid Cash will provide sub-menus to select from

if (pinVerify.pin === pinNumber) {
    console.log('\n\tPin verified successfully!\t\n');
    
    let atmOptions = await inquirer.prompt ([{
        message : 'Welcome! Select your desired option:',
        name : 'menu',
        type : 'list',
        choices : ['Cash Withdrawals', 'Rapid Cash', 'Balance Inquiry', 'End Session'],
    }])
    if (atmOptions.menu === 'Cash Withdrawals') {
        let cashOut = await inquirer.prompt([{
            name : 'moneyout',
            type : 'number',
            message : '\tEnter your desired amount!\t',
        }])
        console.log (`\tTransaction successful! \n \tYour withdrawal amount is ${cashOut.moneyout}.`);
        console.log (`\tand you remaining balance is ${balance-cashOut.moneyout}.`)
    }
else if ( atmOptions.menu === 'Balance Inquiry') {
        console.log (`\tyour available balance is ${balance}\t`);
        
    } else if (atmOptions.menu === 'Rapid Cash') {
        let rapidCash = await inquirer.prompt ([{
            message : 'Select Rapid Cash for instant withdrawal!',
            name : 'rapidAmount',
            type : 'list',
            choices : [1000, 3000, 5000, 8000, 10000],
            }])
        if (rapidCash.rapidAmount) {
            balance -= rapidCash.rapidAmount;
            console.log (`\tTransaction successful! \n\tYour remaining balance is ${balance}.`);
        }   
    } else if (atmOptions.menu === 'End Session') {
        console.log('Thank you for using ATM services.');
    }

} 
 else if (pinVerify.pin !== pinNumber) {
        console.log ('\tInvalid pin entered! Try Again..\t');
        
} else if (balance <=0) {
    console.log ('\tInsufficeint balance!\t');
}
  
else {
    console.log ('Session timed out!');
}

