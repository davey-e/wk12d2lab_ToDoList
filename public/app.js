var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
  populateDropDown();
}

var populate = function (todos) {
  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item
  for (listItem of todos){
    addItem(listItem);
  }
}

const populateDropDown = function(){
  const selectItem = document.getElementById('listOfLists');
  for ( i=0;i < localStorage.length; i++){
    const optionItem = document.createElement('option');
    optionItem.innerText = localStorage.key(i);
    selectItem.appendChild(optionItem);
  }

  console.log(localStorage.key);
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  // this function needs to:
  // - create an li element containing the string 'item'
  // - append the li to the "todo-list" ul
  const listItem = document.createElement('li');
  listItem.innerText = item;
  const toDoList = document.getElementById('todo-list');
  toDoList.appendChild(listItem);
}

var handleButtonClick = function () {
  // this function needs to:
  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
  console.log("handleButtonClick");
  const textInput = document.getElementById('new-item');
  addItem(textInput.value);
  save(textInput);
}

var save = function (newItem) {
  // this function needs to:
  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage
  let jsonString = localStorage.getItem('todoList');
  const savedToDos = JSON.parse(jsonString) || [];
  console.log("newitem value", newItem.value);
  console.log("saved to do", savedToDos);
  savedToDos.push(newItem.value);
  jsonString = JSON.stringify(savedToDos);
  localStorage.setItem('todoList', jsonString);

}

window.addEventListener('load', init);
