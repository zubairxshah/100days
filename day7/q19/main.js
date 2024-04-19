/* Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a
message indicating the number of people you are inviting to dinner. */
let guests = ['Jacob', 'Wendy', 'Scott', 'Carla', 'Rick'];
let newGuest = guests.push("Bernard");
newGuest = guests.unshift("Liza");
guests.splice(guests.length / 2, 0, "James");
console.log(`Dear guests, we have booked ${guests.length} seats including 3 new guests.\n`);
guests.forEach(guest => {
    console.log(`Respected ${guest}, your are invited to attend the buffet party today.`);
});
export {};
