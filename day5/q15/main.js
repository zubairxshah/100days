// Changing Guest List: One of your guests can't make it to the dinner, 
// so you need to send out a new set of invitations with a replacement 
// guest.
let guests = ['Jacob', 'Wendy', 'Scott'];
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("e");
console.log(result);
const array = [2, 5, 9];
console.log(array);
console.log(array.splice(1));
const index = array.indexOf(5);
console.log(index);
if (index > -1) { // only splice array when item is found
    array.splice(index, 1); // 2nd parameter means remove one item only
}
// array = [2, 9]
console.log(array);
export {};
