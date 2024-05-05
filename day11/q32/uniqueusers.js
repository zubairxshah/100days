/* Question 32: Checking Usernames: Ensure uniqueness in usernames.
Explain & TIP: Checking for uniqueness is crucial in user management.
Use loops and conditionals to handle case-insensitive comparisons. */
let userG1 = ['martrin', 'Harold', 'Windy', 'Patrick'];
let userG2 = ['Martrin', 'betty', 'windy', 'James'];
userG2.forEach(ifMatched => {
    if (userG1.includes(ifMatched)) {
        console.log(`${ifMatched} user needs to change its username.`);
    }
    else {
        console.log(`${ifMatched} username is available.`);
    }
});
// Matching as bolean values
let current_users = ["Martin", "Harold", "Windy", "Patrick"];
let new_users = ["martin", "betty", "Windy", "James"];
console.log(current_users.some(val => new_users.includes(val)));
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
export {};
