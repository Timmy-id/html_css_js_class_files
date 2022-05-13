// var myName = '11';
// myName = 3.5;
// let fruits = ['11', 'apple', 'grape', 'guava'];
// // let myFruits = null;
// let newFruit = 11;

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] !== newFruit) {
//   } else {
//     console.log('not added');
//   }
// }

// let newNum = 12;
// let anotherNum = 'John';

// let strToNum = parseInt(anotherNum);
// console.log(typeof strToNum);
// console.log(typeof anotherNum);

// let numToString = String(newNum);

// // console.log(typeof newNum);
// // console.log(typeof numToString);

// let age = 15;

// let beer = age >= 18 ? 'Allowed' : 'Not allowed'; // Ternary operation

// // console.log(beer);

// let myFirstName = 'John';
// let myLastName = 'Bill';

// let myFullName = myFirstName + myLastName;
// // console.log(myFullName);

// // console.log(newNum && anotherNum);
// // console.log(newNum === anotherNum);

// // console.log(myName == fruits)
// // console.log(typeof myFruits);

// // fruits.length;

// // console.log(fruits[fruits.length - 1]);

// // fruits.push('Blue Berry');
// // fruits.pop()
// // fruits.unshift('grape')
// // fruits.shift();

// // console.log(fruits);

// let fruitString = fruits.toString();

// let joinMethod = fruits.join(' - ');

// let fullName = myName + ' Ade';

// let evenNumber = 6;
// let EvenNumber = 12;

// let _val = 16;
// // evenNumber *= _val

// // console.log(_val);

// // console.log(evenNumber);
// // console.log(EvenNumber)

// let num = 6;
// num = num + 1;
// // console.log(++num)

// // JavaScript function
// function addOne(val) {
//   return val + 1;
// }

// function getFullName(firstName, LastName) {
//   return firstName + ' ' + LastName;
// }

// function sqr(num = 2) {
//   let newNum = num * num;
//   return newNum;
// }

// function noArg() {
//   return 'No argument';
// }

// let noVal = noArg();
// let noValue = noArg();

// // console.log(noVal, noValue);

// // console.log(sqr());
// console.log(Math.PI);

// let MyFullName = getFullName('Bill', 'Stone');
// let MyOtherName = getFullName('Sharon', 'Jill');
// let MyName = getFullName('John', 'Doe');

// // console.log(MyFullName);
// // console.log(MyOtherName);
// // console.log(MyName);

// let addOneToTwo = addOne(100);

// // console.log(addOneToTwo);

let myName = 'Billion';
// console.log(myName.slice(0, 4))
// console.log(new Date());

// let dateToday = new Date();

// console.log(dateToday.getFullYear());

function multiplyByNineFifth(num) {
  return num * (9 / 5);
}

/**
 * ((9/5) * C) + 32 
 */

function convertCelciusToFahrenheit(cel) {
    return multiplyByNineFifth(cel) + 32
}
