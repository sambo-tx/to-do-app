function onReady(){
 const addToDoForm = document.getElementById('addToDoForm');
 const newToDoText = document.getElementById('newToDoText');
 const toDoList = document.getElementById('toDoList');
 addToDoForm.addEventListener('submit', () => {
   event.preventDefault();
   let title = newToDoText.value;
   let newLi = document.createElement('li');
   let checkbox = document.createElement('input');
   checkbox.type = "checkbox";
   newLi.innerHTML +='<li>' + title + ' <input type=checkbox><button onclick="Delete(this);">Delete</button></li>';
   toDoList.appendChild(newLi);
   newToDoText.value='';
 });
}
window.onload = function() {
  onReady();
};
function Delete(currentEl){
  currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  }
