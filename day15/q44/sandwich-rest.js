/* Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite
number of arguments, useful for handling lists
of data like sandwich ingredients. */
function sandwichOrder([...ingredients]) {
    console.log(ingredients.join(', '));
}
sandwichOrder(['Bread', 'Tuna', 'Ketchup']);
sandwichOrder(['Bread', 'Cheese', 'Mayo', 'Tomatoes', 'Onion']);
export {};
