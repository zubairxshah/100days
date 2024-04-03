#!/usr/bin/env node

/* This program helps you add routine and important task in a todo list.
   It will ask you to add a task, remove already added tasks, list down all task,
   The program will keep showing you the menu to add, update, or remove todo list
   until you press exit to leave the CLI environment.
 */

import inquirer from "inquirer";
import chalk from "chalk";

let todoList = ['Work hard', 'Stay in office'];

console.log(chalk.red.underline.bgGray('\tWelcome to Office Todo List Manager!\n'));

// Making a function to ask users to select a todo list operation.

async function taskList(todoList :string[]) {
    do {    
    let menuList = await inquirer.prompt (
    [
        {
            name: 'choose',
            type: 'list',
            message: chalk.bgBlue('\tSelect your desired operation from the menu and press enter.\n'),
            choices: ['Add a New Task', 'Update a Task', 'Remove a Task','View List', 'Exit']
        }
    ]   
    );    

    if (menuList.choose === 'Add a New Task'){
        let addTask = await inquirer.prompt (
            [
                {
                    name: 'add',
                    type: 'input',
                    message: chalk.bgGreen('\tAdd a new task..\n'),
                    
                }
            ]   
            );
            todoList.push(addTask.add);
            console.log(todoList);
    }
    if (menuList.choose === 'Update a Task'){
        let tasksAdded = await inquirer.prompt (
            [
                {
                    name: 'select',
                    type: 'list',
                    message: chalk.bgCyan('\tSelect any task to update..\n'),
                    choices: todoList.map(item => item),
                }
            ]   
            );
            let updateTasks = await inquirer.prompt (
                [
                    {
                        name: 'update',
                        type: 'input',
                        message: chalk.bgGreen('\tReplace selected task with a new one.\n'),
                        
                    }
                ]   
                );
                let newTasks = todoList.filter(val => val !== tasksAdded.select);
                todoList = [...newTasks, updateTasks.update];
                console.log(todoList);
    }
    if (menuList.choose === 'Remove a Task'){
        const taskDelete = await inquirer.prompt (
            [
                {
                    name: 'omit',
                    type: 'list',
                    message: chalk.bgRed('\tSelect any task to remove..\n'),
                    choices: todoList.map(item => item),
                },
            ]   
            );
            let newTasks = todoList.filter(val => val !== taskDelete.omit);
            todoList = [...newTasks];
            console.log(todoList);

    }
    if (menuList.choose === 'View List'){
        console.log (todoList);
    };

    if (menuList.choose === 'Exit'){
        console.log(chalk.bgBlackBright('\tThank you for adding your tasks.'));
        break;
    }
    } while (true);
};
taskList(todoList);