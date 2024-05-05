/* Question 19: Question 22: Intentional Error: Try to produce an array index error 
in one of your programs. Correct the error before finishing. */

let guests : string[] = ['Jacob', 'Wendy', 'Scott', 'Carla', 'Rick'];


console.log(`Dear guest, we cannot book a seat for ${guests[7]}.\n`); // Accessing index that does not exit
// Above code returns an undefined value. Let's try correcting it.
// index starts from 0 and onwards and we have 5 names, so the index numbers are 0-4.
console.log(`Dear guest, we cannot book a seat for ${guests[4]}.\n`); // We call a index value that exists.
// console prints [Rick]
