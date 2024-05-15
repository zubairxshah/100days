/* Question 45: Cars: Create detailed car objects with flexible properties.

Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters
let you create detailed and flexible objects.
This is ideal for data with a few required fields and many optional fields. */
function make_vehicle(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_vehicle("Honda", "Civic", ["color", "Silver"], ["year", 2022]));
console.log(make_vehicle("Haval", "H6", ["color", "White"], ["isReady", false]));
console.log(make_vehicle("Kia", "Sportage", ["trasmission", "A/T"], ["weightKG", 2000], ['new', true]));
//Example:
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
export {};
