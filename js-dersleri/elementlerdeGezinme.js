
// Elementlerin üzerinde gezinme

let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)"); // list guruptaki 2. elemanı seçiyoruz
const card = document.querySelector(".card");

value = todoList;
value = todo;
value = card;


// child nodes

value = todoList.childNodes; // çıktısı = >  NodeList(9) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text
value = todoList.children; // çıktısı = > [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]
value = todoList.children[0]; // istediğimiz çocuğa erişimi için kullanırlır 
value = todoList.children[todoList.children.length - 1 ] // son elemanı bu şekilde çağırırız
value = todoList.lastElementChild; // kısa hali 
// value = todoList.firstElementChild.textContent= "değişen madde";

value = card;
value = card.children;
value = card.children[0].children[0].textContent = "php"; // üç çocuğun ilkine sonrasında ilk çocuğun ilkine ulaştık
value = card.children[3].children[3].textContent = "java"; // üç çocuğun 3. süne sonrasında ilk çocuğun sonuncusuna ulaştık
value = todoList.childElementCount; // uzunluğunu gösterir



value = card.parentElement; // kapsayıcı dive ulaşırız
value = card.parentElement.parentElement; // body 

// şöyle mantık çocukta anneye anneden annaneye ulaştık o da body dir 

value = todo;
 value = todo.previousElementSibling;
 value = todo.nextElementSibling;

console.log(value);