// Select all the required elements
const inputBox = document.querySelector('.input-section input');
const addBtn = document.querySelector('.input-section button');
const shoppingList = document.querySelector('.items-list');
const itemsNumber = document.querySelector('.items-number');
const clearAllBtn = document.querySelector('.footer button');

inputBox.onkeyup = function () {
  let data = inputBox.value; // getting the entered value

  // checking if the input contains only spaces
  if (data.trim() != 0) {
    addBtn.classList.add('active'); // add the active class to the add button
  } else {
    addBtn.classList.remove('active');
  }
};

showShoppingList();

// if the user clicks the add item button
addBtn.onclick = function () {
  let data = inputBox.value;
  // get the localStorage
  let getLocalStorage = localStorage.getItem('New Shopping List');
  if (getLocalStorage == null) {
    shopListArr = [];
  } else {
    shopListArr = JSON.parse(getLocalStorage); // transforming JSON string into an array object
  }
  shopListArr.push(data);
  localStorage.setItem(
    'New Shopping List',
    JSON.stringify(shopListArr) // transforming the array object into a JSON string
  );
  showShoppingList();
  addBtn.classList.remove('active');
};

function showShoppingList() {
  let getLocalStorage = localStorage.getItem('New Shopping List');
  if (getLocalStorage == null) {
    shopListArr = [];
  } else {
    shopListArr = JSON.parse(getLocalStorage);
  }
  itemsNumber.textContent = shopListArr.length;
  if (shopListArr.length > 0) {
    clearAllBtn.classList.add('active');
  } else {
    clearAllBtn.classList.remove('active');
  }
  let newListElement = '';
  shopListArr.forEach(function (element, index) {
    newListElement += `<li>${element}<span onclick="deleteItem(${index})"><a class="del-btn">Delete</a></span></li>`;
  });
  shoppingList.innerHTML = newListElement;
  inputBox.value = '';
}

function deleteItem(index) {
  let getLocalStorage = localStorage.getItem('New Shopping List');
  shopListArr = JSON.parse(getLocalStorage);
  shopListArr.splice(index, 1);
  // update the localStorage contents
  localStorage.setItem(
    'New Shopping List',
    JSON.stringify(shopListArr)
  );
  showShoppingList();
}

clearAllBtn.onclick = function () {
  shopListArr = [];

  localStorage.setItem(
    'New Shopping List',
    JSON.stringify(shopListArr)
  );
  showShoppingList();
};
