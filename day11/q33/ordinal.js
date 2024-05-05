/* Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
   Ordinal numbers means that ends with st, nd, th like 1st, 2nd, 3rd, and 4th */
const suffixes = ['st', 'nd', 'rd', 'th'];
for (let i = 0; i < 22; i++) {
    if (i % 10 === 1 && i % 100 !== 11) {
        console.log(`${i}${suffixes[0]}`);
    }
    else if (i % 10 === 2 && i % 100 !== 12) {
        console.log(`${i}${suffixes[1]}`);
    }
    else if (i % 10 === 3 && i % 100 !== 13) {
        console.log(`${i}${suffixes[2]}`);
    }
    else {
        console.log(`${i}${suffixes[3]}`);
    }
}
//Assignment example..
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
export {};
