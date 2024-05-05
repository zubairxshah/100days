/* Question 39: City Names: Formatting city-country pairs. */

function city_Province(city: string, province: string): string { // Adding :string before curly brace to fix the result as string
    return `${city}, ${province}`;
}

console.log(city_Province("Karachi", "Sindh"));
console.log(city_Province("Peshawar", "KPK"));
console.log(city_Province("Rawalpindi", "Punjab"));