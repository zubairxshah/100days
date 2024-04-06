/* More Guests: You've found a bigger dinner table, so there's room for more guests.
Tip: When you have more space, you can add more guests to your list. You can add guests at the
beginning, middle, and end of an array. */
var guests = ['Jacob', 'Wendy', 'Scott'];
var newGuest = guests.push("Bernard");
newGuest = guests.unshift("Rick");
guests.splice(guests.length / 2, 0, "James");
guests.forEach(function (guest) {
    console.log("Respected ".concat(guest, ", your are invited to attend the wedding party today."));
});
var i = 0;
for (i = 0; i < guests.length; i++) {
    console.log("Respected ".concat(guests[i], ", please join us on the dinner."));
}
;
function superPizza(dough) {
    if (dough === void 0) { dough = 1; }
    var ingredients = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingredients[_i - 1] = arguments[_i];
    }
    console.log(dough);
    console.log(ingredients);
}
;
superPizza(1, 1.5, 2, 5);
function maxPizza(dough) {
    if (dough === void 0) { dough = 1; }
    var ingredients = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingredients[_i - 1] = arguments[_i];
    }
    console.log(dough);
    console.log.apply(console, ingredients);
}
;
superPizza(1, 1.5, 2, 5);
