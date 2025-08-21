var todos_array = [];

var editIndex=-1;
function addTodo(){
  var inputElement= document.getElementById("todo")
  if(inputElement.value === ''){
    alert("Please enter a task...")
    return
  }
  todos_array.push(inputElement.value)
  inputElement.value=""
  showList()
}

function showList(){
  var listItems = document.getElementById("todo-list")

  listItems.innerHTML=""
for( var i=0; i < todos_array.length; i++){
listItems.innerHTML += `<li class="todo-item"><span class="check"></span>  ${todos_array[i]}   <div class="actions">
          <button  onclick="editTodo(${i})" class="edit-btn" >✏️</button>
          <button onclick="deleteTodo(${i})" class="delete-btn">🗑️</button>
        </div>
        </li>`;
}}

function deleteTodo(index){
  todos_array.splice(index,1)
  showList()
}

function editTodo(index){
  var inputElement= document.getElementById("todo")
   inputElement.value=todos_array[index]
   editIndex = index;
        
        addBtn.style.display="none";
        updateBtn.style.display="inline-block"
        
        
}

function updateTodo(){
  var inputElement= document.getElementById("todo")
  if(inputElement.value === ''){
    alert("Please enter a task...")
    return
  }
  todos_array[editIndex] = inputElement.value;
  inputElement.value=""
  editIndex=-1;
  
  
  addBtn.style.display="inline-block";
  updateBtn.style.display="none"
  
  showList()
}