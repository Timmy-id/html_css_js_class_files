// var myName = 'Timmy';
// var myName = 'Woods';

// let evenNumber = 8;
// evenNumber = 10;

// const oddNumber = 3;

// console.log(myName);
// console.log(evenNumber);
// console.log(oddNumber);

const header = document.querySelector('.header');

function changeContent() {
  return (header.innerHTML = 'I am using a function');
}

header.addEventListener('click', changeContent);
