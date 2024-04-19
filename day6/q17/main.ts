/* Shrinking Guest List: Unfortunately, your new table won’t arrive in time, 
and you can only invite two guests. */

let guests : string[] = ['Jacob', 'Wendy', 'Scott', 'Carla'];

// let's remove the guests and store them in a new variable
let heldGuests = guests.splice(0,2);
for (let i=0; i<=1; i++) {
  console.log(`Dear ${heldGuests[i]}, There is some shortage of seats, we can't invite you. Sorry for invonvenience.`);
}
// Now, bringing back available guests back to list
guests.forEach(guest => {
  console.log(`Dear ${guest}, we have only 2 seats available, you are invited to the party.`);
})