#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green('\t===================================='))
console.log(chalk.green('\tWelcome to Global Currency Converter'))
console.log(chalk.green('\t===================================='))

let currencyValue : any = {
    AED:3.67, AUD:1.5, NZD:1.66, CHF:0.91, EUR:0.92, GBP:0.79, INR:83.26, PKR:277.7, SAR:3.75, ZAR:18.63, USD:1
}

async function conversion (){
    while(true){
    const paymentCurr = await inquirer.prompt ([
        {
            name:'c1',
            type:'list',
            message:'Enter your payment currency:',
            choices:[
                'AED', 'AUD', 'NZD', 'CHF', 'EUR', 'GBP', 'INR', 'PKR', 'SAR', 'ZAR', 'USD' 
            ]
        }        
    ]);
    
    const receivingCurr = await inquirer.prompt ([
        {
            name:"c2",
            type: 'list',
            message: 'Enter your receiving currency:',
            choices: [
                'AED', 'AUD', 'NZD', 'CHF', 'EUR', 'GBP', 'INR', 'PKR', 'SAR', 'ZAR', 'USD'
            ]
        }
    ]);

    const userInput = await inquirer.prompt([
        {
            name:'amount',
            type:'number',
            message:'Enter amount of currency, you like to exchange:',
        }
    ]);

let fromAmount = currencyValue[paymentCurr.c1];
let toAmount = currencyValue[receivingCurr.c2];
let newAmount = userInput.amount;
let baseCurrency = newAmount / fromAmount;
let convertedCurrency = baseCurrency * toAmount;
let conversionRate = newAmount / convertedCurrency;

console.log (`Your ${(newAmount.toFixed(2))} ${paymentCurr.c1} with exchange rate of ${conversionRate.toFixed(2)} \nis converted to ${convertedCurrency.toFixed(2)} ${receivingCurr.c2}`);

const userExit = await inquirer.prompt([
        {
            name:'out',
            type:'list',
            message:'Do you want to do another conversion?',
            choices: ['Yes', 'No'],
        }
    ]);
if (userExit.out === 'No') {
process.exit();    
}
};
}
conversion();
