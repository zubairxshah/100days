/* Question 20: Think of something you could store in an array. For example, you could make a list 
of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program 
that creates a list containing these items. */

let rivers : string[] = ['Indus', 'Ravi', 'Sutlej', 'Chenab', 'Jhelum', 'Gomal'];

console.log(`${rivers.join(', ')} are the names of rivers flowing in Pakistan.`);

let languages : string[] = ['Urdu', 'Sindhi', 'Punjabi', 'Pashto', 'Balochi', 'Siraiki'];

console.log(`These ${languages.join(', ')} languages are widely spoken in Pakistan.`);


/////////////////////////////


import inquirer from "inquirer";
import chalk from "chalk";

let todoList : String [] = [];
let conditions = true;

// Print welcome message
console.log(chalk.magenta.bold("\n\t Welcome to CodeWithAmmar Todo-List Application"));

let main = async () => {
    while (conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an Option You Want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
            
            
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if (option.choice === "Delete Task"){
            await deleteTask ()
        }
        else if (option.choice === "Update Task"){
           await updateTask ()
        }

        else if(option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
    
    }
}

let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
         message: "Enter Your New Task :",
        }
    ]);

    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} Task Added Successfully in Todo-List\n`);
}

// Function to view all Todo-List Tasks
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index +1}: ${task}`)
    });
    console.log("\n");
}

// Functions to delete a task from the list
let deleteTask = async () => {
   await viewTask()
   let taskIndex = await inquirer.prompt([
    {
        name: "index",
        type: "number",
        message: "Enter The Index no.' Of The Task You Want To Delete:",
    }
   ]);
    let deletedTask = todoList.splice(taskIndex.index-1, 1);
    console.log(`\n ${deletedTask}This task has been deleted successfully from your Todo-List\n`);
}

// Functions to update a task
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter The Index no' Of The Task You Want To Update:",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter New Task Name:",
        }
    ]);
    todoList [update_task_index.index-1] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index.index} updated successfully [For updated list Check option: View Todo-List]`)
}


main();

// import inquirer from "inquirer"
// let balance:number = 10000
// let pin:number = 2378;
// console.log("Welcome to Anas Tariq Ali ATM Mahine")
// let pinAnswer = await inquirer.prompt([{
//     name:"q1",
//     message:"enter your pin",
//     type:"number"
// }]);
// if(pinAnswer.q1 === pin){
//   console.log("correct pin number")
//   let opener =await inquirer.prompt(
//     [{
//       name:"operations",
//      message:"Select your option",
//     type:"list",
//     choices: ["Withdraw" , "Checkbalance" , "Fastcash"]
//     }])
  
//   if(opener.operations === "Withdraw"){
//     let amountAns =await inquirer.prompt([{
//       name:"amount",
//       message:"Enter your amount",
//       type:"number"
//     }]);
//     if(amountAns.amount < balance){
//       balance-= amountAns.amount;
//       console.log("Now your balance is " + balance)
//     }
//     else{
//       console.log("insufficient balance")
//   }}
// else if(opener.operations === "Checkbalance") {
//   console.log("your current amount is" + balance)
// }
// else if(opener.operations === "Fastcash"){
//   let fast = await inquirer.prompt(
//     [{
//         name:"fast_opt",
//         message:"How much money you want to  withdraw",
//         type:"list",
//     choices:["1000" , "5000" , "8000"],
//     }]);
// if(fast.fast_opt ==="1000"){
//   balance -= fast.fast_opt;
//   console.log(`your remaining balance is ${balance}`);
// }
// if(fast.fast_opt ==="5000"){
//   balance -= fast.fast_opt;
//   console.log(`your remaining balance is ${balance}`);
// }
// if(fast.fast_opt === "8000"){
//   balance -= fast.fast_opt;
//   console.log(`your remaining balance is ${balance}`);
//       }
//     }
// }
//   else{
//     console.log("invalid pin code")
//   }

