// Greetings: Use the array from Exercise 11. Instead of just printing 
// each person’s name, print a message to them. The message should 
// be the same for each person, but personalized with their name.

let names = ["Jack", "Judy", "Shah", "Ali"];
let greeting = 'hope your are doing great.'
// printing names with for loop
for (let i = 0; i < names.length; i++) {
    console.log(`${names[i].trim()}, ${greeting}`);
}

for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}