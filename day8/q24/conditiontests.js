/* Question 24: More Conditional Tests: Expand your conditional tests to cover
a wider range of comparisons. */
// Equality with strings
console.log("Testing equality with strings:");
console.log("coke" === "coke"); // True
let a = 'apple';
let b = 'Apple';
console.log(a === b); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(100 > 80); // True
console.log(20 < 10); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let games = ["cricket", "soccer", "hockey"];
console.log("Is 'soccer' in games?");
console.log(games.includes("soccer")); // True
// Test whether an item is not in a array
console.log("Is 'tennis' not in games?");
console.log(!games.includes("tennis")); // True
console.log("Making Flase without ! operator and check 'tennis' in games?");
console.log(games.includes("tennis")); // Flase
export {};
