// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several 
// examples. Use your list to print a series of statements about 
// these items, such as “I would like to own a Honda motorcycle.”

let vehicles = ['sports bike', 'racing car', 'dirt bike', 'truck'];
let message = ['I like to ride a']
for (let vehicle of vehicles) { //using simple for loop to call each element
    console.log (`${message} ${vehicle}`);}


let transports: string[] = ["Hayabusa", "Saab SUV", "Honda ATV"];
// above can be done using .forEach function 
transports.forEach(transport => {
    console.log(`\nI would like to own a ${transport}.`);
});

// Following uses for loop 
let vehicles2 = ['sports bike', 'racing car', 'dirt bike', 'truck'];
let message2 = ['I wish to buy']
for (let i=0; i<vehicles.length; i++) { //using for loop to print message for each vehicle type
    console.log (`\n${message2} ${vehicles2[i]}.`);
};