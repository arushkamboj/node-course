// const square = function(x) {
//   return x * x;
// };

// const square = x => {
//   return x * x;
// };

// const square = x => x * x;

// console.log(square(2));

/**
 * Arrow Functions do not bind their own this value
 * They access the this value in the context they were created
 */

const event = {
  name: 'Birthday Party',
  guestList: ['Arush', 'Neha', 'Himalaya'],
  printGuestList() {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + ' is attending ' + this.name);
    });
  }
};
