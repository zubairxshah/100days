/* Question 31: No Users: Ensure your user list isn’t empty.
Explain & TIP: Before greeting users, check if there are any.
This teaches you to handle empty arrays. */
const emptyArray = [];
if (emptyArray.length === 0) { //.length method returns 0 if an array is empty 
    console.log('Sorry! The guests have not been invited.');
}
else {
    console.log('Please, invite some guests to start the party.');
}
export {};
