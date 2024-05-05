/* Question 28: Stages of Life: Determine a person’s life stage with an if-else chain. */

let age = 13;


if ( age < 2 ) {
    console.log ('Your life stage is called "Baby".');
}
else if ( age < 4 ) {
    console.log ('Your life stage is called "Toddler".');
}
if ( age < 13 ) {
    console.log ('Your life stage is called "Kid".');
}
else if (age >= 13 && age <= 19) {
    console.log ('Your life stage is called "Teenage".');
}
else if (age > 25) {
    console.log ('Your life stage is called "Adult".');
}
else {
    console.log ('Your life stage is called "Elderhood".');
};