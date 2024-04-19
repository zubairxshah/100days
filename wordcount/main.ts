#!usr/bin/env node
/* The project will count words in sentence provided through user input.
The white spaces will be removed from the sentence to count exact words in that.
A loop is introduced to repeat the input entry and count another sentence.
Choices will be asked to end the program, otherwise it will keep asking the user. */

import inquirer from "inquirer";
import chalk from "chalk";

let main = async () => {
let sentence = ''; // to store the the value of addInput to be used in other if statements
    do {
    let menu = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: chalk.bgBlueBright.bold("Select a menu item to proceed.\n"),
            choices: ["Enter a Sentence", "Count Letters", "Count Spaces", "Total Characters", "Exit"],
        }
    ]);

    if (menu.options === 'Enter a Sentence') {
        const addInput:  {
        Sentence : string
        } = await inquirer.prompt ([
            {
            name : 'Sentence',
            type : 'input',
            message : 'Please, write any sentence to count its words:',
            }
        ]);
    
        sentence = addInput.Sentence; // input value stored in sentence
        //code to count words in a sentence
        const wordsCount = addInput.Sentence.trim().split(" ");

        console.log (chalk.green(`Your sentence contains ${chalk.underline.bold(wordsCount.length)} words.`));
    }
    
    if (menu.options === "Count Letters"){
        // code to count letter (Upper and Lower cases) in a sentence
        let regex = /[a-zA-Z]/g;
        const lettersCount = sentence.match(regex)?.length;
        console.log (chalk.green(`Your sentence contains ${chalk.underline.bold(lettersCount)} letter, special characters are ignored.`));
    }
    // following code will count spaces in the sentence
    if (menu.options === "Count Spaces"){
        
        const whiteSpaces = sentence.split(" ").length - 1;
        console.log (chalk.green(`Your sentence contains ${chalk.underline.bold(whiteSpaces)} characters.`));
    }
    // This code tells the user total characters in a sentence
    if (menu.options === "Total Characters"){
        const whiteSpaces = sentence.length;
        console.log (chalk.green(`Your sentence contains ${chalk.underline.bold(whiteSpaces)} white spaces.`));
    }
    // asks whether user wants to exit or continue and end program if selected no.
    if (menu.options === "Exit"){
        let exit = await inquirer.prompt([
            {
                name: 'end',
                type: 'confirm',
                message: 'Would you like to exit',
                default: ''
            }
        ]);
        if (exit.end === true) {
            
            console.log (chalk.bgRgb(15, 100, 204).bold('\nThank you for using Advanced Word Counter Program.'));
            break;
        }

        }
    }
while(true);

}    
main();