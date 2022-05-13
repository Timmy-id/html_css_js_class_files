// function myObject () {

// }

// to create an object
// const myObj = {
//   name: 'Timmy',
//   dob: 'Jan 1, 2022',
//   details: function () {
//     return this.name + ' was born in ' + this.dob;
//   },
// };

// console.log(myObj.details());

// console.log(myObj);
const car = new Object();
car.year = 2020;
car['make'] = 'Toyota';
car['full name'] = 'Tai Stone';
// console.log(car);
car['make'] = 'Nissan';
// delete car['make']
car['details'] = function () {
  return `The name of the car is ${this.make} and it was manufactured in ${this.year}`;
};

// console.log(car.details());
console.log(this)

// to reference a variable in a string, use `${}`

// let myName = 'Timmy'

// console.log(`my name is ${myName}`)
