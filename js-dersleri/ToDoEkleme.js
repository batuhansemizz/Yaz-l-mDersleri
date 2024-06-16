// Todo ekleme

// Elemanların seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const TaskList = document.querySelector("#task-list");
let todos;

// load items
loadItems();

eventListeners();

function eventListeners() {
  // submit event
  form.addEventListener("submit", addNewItem);
  // delete item
  TaskList.addEventListener("click", deleteItem);
  // btnDeleteAll
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems() {
  todos = getItemsFromLS();
  todos.forEach(function(item) {
    creatItems(item);
  });
}

// get items from local storage
function getItemsFromLS(){
  if(localStorage.getItem("todos")==null){
    todos = [];
  }else{
    todos =JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}


// set item  to local storage
function setItemToLS(newTodo){
  todos = getItemsFromLS();
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos))
}

function creatItems(newTodo) {
  // li oluşturma
  const li = document.createElement("li");
  li.classList = "list-group-item list-group-item-secondary";

  // inputa girilen değeri li ye ekliyoruz appendChild ile
  li.appendChild(document.createTextNode(newTodo));
  // bu halde listeye eklenmez onun için farklı etiketler oluşturmamız lazım

  // a oluşturmak
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = ` <i class="fas fa-times"></i>`;

  // oluşturduğumuz a yı li ye li yi ise ul ye eklememiz lazım
  li.appendChild(a);
  TaskList.appendChild(li);
}

function addNewItem(e) {
  // console.log("submit")

  /* değer girilip girilmediğini kontrol etmek için bir if bloğu yazamamız lazım 
    eğer boş ise bir alert karşısına çıkar */

  if (input.value === "") {
    alert("yeni bir eleman eklemelisiniz");
  }
  // şimdi görsel olarak da listemize eklenecek
  e.preventDefault();

  creatItems(input.value);

  setItemToLS(input.value);

  input.value = "";

  
}

// eleman silme

function deleteItem(e) {
  
    if (e.target.className === "fas fa-times") {
      if (confirm("silmek istediğinize emin misibiz"))
      e.target.parentElement.parentElement.remove();
    deleteToDoFromStorage(e.target.parentElement.parentElement.textContent)
    }
  
  e.preventDefault();
}

function deleteToDoFromStorage(deletetodo){
   let todos = getItemsFromLS();

   todos.forEach(function(todo,index){
    if(todo === deletetodo){
      todos.splice(index,1);
    }
   })
   localStorage.setItem("todos",JSON.stringify(todos));
}

// tüm elemanları silme
function deleteAllItems(e) {
  if (confirm("tüm elemnaları silemk istedğinizden emin misiniz")) {
    // TaskList.childNodes.forEach(function(item){
    //   if(item.nodeType === 1){
    //     item.remove();
    //   }
    // });
    while(TaskList.firstChild){
      TaskList.removeChild(TaskList.firstChild)
    }
    localStorage.clear();
  }

  // ikinci yol

  TaskList.innerHTML = "";
}
