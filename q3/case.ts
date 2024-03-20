// Name Cases: Store a person’s name in a variable, and then print 
// that person’s name in lowercase, uppercase, and titlecase.
const name =  "David Copperfield";

// printing name in lowercase
console.log (`Name in lowercase: ${name.toLowerCase()}.`);
console.log(" ");
// printing name in the uppercase
console.log (`Name in UPPERCASE: ${name.toUpperCase()}.`);
console.log(" ");

// printing name in Title Case
const firstName = "john";
const secondName = "doe";
console.log ("Printing name in Title Case");
const nameT1 = (firstName.charAt(0).toUpperCase() + firstName.slice(1).toLocaleLowerCase());
const nameT2 = (secondName.charAt(0).toUpperCase() + secondName.slice(1).toLocaleLowerCase());
console.log (`${nameT1} ${nameT2}`);
