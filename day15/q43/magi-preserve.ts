/* Question 43: Unchanged Magicians: Preserve the original magician names 
while creating a new "great" list. */

//loop based functon to display array elements.


const magicians : string[] = ['Nadjib Haffaf', 'Appolo Robbins', 'Bartolomeo Bosco'];
const nums : number[] = [1, 2, 3];
function listMagiNames(nums : number[], magicians: string[]) {
    for (let i =0; i<=magicians.length-1; i++) {
        console.log(nums[i], ...magicians[i]);
    };
}
function make_great(magicians: string[]): string[] {
    let greatMagicians : string[] = [];
    magicians.forEach( magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
listMagiNames(nums, magicians); // Shows original names
console.log("Great magicians:");
listMagiNames(nums, greatMagicians); // Shows modified names

