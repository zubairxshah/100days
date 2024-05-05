/* Question 41: Magicians: Display magician names from an array. */
//Simple method to display array elements
function listMagicians() {
    const magician = ['Nadjib Haffaf', 'Appolo Robbins', 'Bartolomeo Bosco'];
    console.log(`${magician.join(' ')}`);
}
;
listMagicians();
//loop based functon to display array elements.
const magicians = ['Nadjib Haffaf', 'Appolo Robbins', 'Bartolomeo Bosco'];
const nums = [1, 2, 3];
function listMagiNames(nums, magicians) {
    for (let i = 0; i <= magicians.length - 1; i++) {
        console.log(nums[i], magicians[i]);
    }
    ;
}
listMagiNames(nums, magicians);
export {};
