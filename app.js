function onReady(){
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  function createNewToDo() {
     toDos.push({
       title: newToDoText.value,
       complete: false,
       id: id
     });
     id++;
     newToDoText.value='';
     renderTheUI();
   }
   function deleteToDo(id){
    toDos = toDos.filter(item => item.id !== id);
    if (toDos == false){
      delete toDos[toDos.id];
    }
   }

  function renderTheUI() {
    console.log("UIworks");
    const toDoList = document.getElementById('toDoList');
     toDoList.textContent = '';

toDos.forEach(function(toDo) {
  const newLi = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent="Delete";
  deleteBtn.addEventListener('click', event =>{
    deleteToDo(toDo.id);
    renderTheUI();

  });
  const title = document.createElement('span');
  newLi.textContent = toDo.title;
  toDoList.appendChild(newLi);
  newLi.appendChild(checkbox);
  newLi.appendChild(deleteBtn);
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
