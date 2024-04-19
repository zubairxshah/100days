// Simple BMI Calculator

// let yourWeightInKG :number = 50;
// let heightInMeters :number = 1.5;
// let yourBMI :number = yourWeightInKG / heightInMeters**2; // calculates BMI
// console.log (`Your BMI is ${yourBMI}.`); // gives out your BMI

// BMI Calculation based on your input

import inquirer from "inquirer";


  const weight = await inquirer.prompt([ //takes input for weight
     {
          type: 'input',
          name: 'weight',
          message: 'What is your weight in KG?',
     },
    ])
     const height = await inquirer.prompt([  // takes input for height
     {
      type: 'imput',
      name: 'height',
      message: 'What is your height in meters?',
     },
   ]);
// code for BMI calcualtion is inside console.log expression.
   console.log(`Your Body Mass Index "BMI" is ${weight.weight/Math.pow(height.height, 2)}!`);
