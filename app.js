function onReady(){
  console.log("Onready WORKS")
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  function createNewToDo() {
     toDos.push({
       title: newToDoText.value,
       complete: false
     });
     newToDoText.value='';
   }
     renderTheUI();
  function renderTheUI() {
    console.log("UIworks");
    const toDoList = document.getElementById('toDoList');
     toDoList.textContent = '';

toDos.forEach(function(toDo) {
  const newToDo = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  const title = document.createElement('span');
  title.textContent = toDo.title;
  toDoList.appendChild(newLi);
  newLi.appendChild(checkbox);

});
  }
const addToDoBtn = document.getElementById('addToDoBtn');
   addToDoBtn.addEventListener('click', event => {
     console.log("to do btn works");
      event.preventDefault();
      createNewToDo();
      newToDoText.value= '';
      console.log("btn double works");
    });
    renderTheUI();
    console.log("works");
}
window.onload = function() {
  onReady();
};
