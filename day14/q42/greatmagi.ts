/* Question 42: Great Magicians: Add "the Great" to magician names. */

//Simple method to display array elements
function listMagicians () {
    const magician = ['Nadjib Haffaf', 'Appolo Robbins', 'Bartolomeo Bosco'];
    console.log(`${magician.join(' is the great. ')}`);
};

listMagicians()

//loop based functon to display array elements.

const magicians : string[] = ['Nadjib Haffaf', 'Appolo Robbins', 'Bartolomeo Bosco'];
const str : string[] = ['the Great'];
function makeGreat(magicians: string[], str: string[]) {
    for (let i =0; i<=magicians.length-1; i++) {
        console.log(magicians[i], str[0]);
    };
}

makeGreat(magicians, str);
