/* More Guests: You've found a bigger dinner table, so there's room for more guests.
Tip: When you have more space, you can add more guests to your list. You can add guests at the
beginning, middle, and end of an array. */
let guests = ['Jacob', 'Wendy', 'Scott'];
let newGuest = guests.push("Bernard");
newGuest = guests.unshift("Rick");
guests.splice(guests.length / 2, 0, "James");
guests.forEach(guest => {
    console.log(`Respected ${guest}, your are invited to attend the wedding party today.`);
});
let i = 0;
for (i = 0; i < guests.length; i++) {
    console.log(`Respected ${guests[i]}, please join us on the dinner.`);
}
;
function superPizza(dough = 1, ...ingredients) {
    console.log(dough);
    console.log(ingredients);
}
;
superPizza(1, 1.5, 2, 5);
function maxPizza(dough = 1, ...ingredients) {
    console.log(dough);
    console.log(...ingredients);
}
;
superPizza(1, 1.5, 2, 5);
export {};
