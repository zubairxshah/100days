/* Question 37: Large Shirts: Default values in make_shirt(). */
function customTshirt(size = 'Large', text = 'Code Surfer!') {
    console.log(`This order requires to make a ${size} size t-shirt with a "${text}" custom text on front.`);
}
customTshirt();
customTshirt('Medium');
customTshirt('Small', 'I love JavaScript!');
export {};
