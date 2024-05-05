/* Question 30: Hello Admin: Greet users differently, especially 'admin'. */

let usernames: string[] = ['admin', 'developer', 'engineer', 'tester'];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});

// using for loop

for (let i=0; i = usernames.length; i++) {
    if (usernames.includes('admin')) {
        console.log('Hello admin, you are now logged in.');
        break;
    }
    else {
        console.log(`Hello ${usernames[2]}, you are now logged in.`);
    }
}