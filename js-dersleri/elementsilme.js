// Element silme 




// remove methodu

// taskList.remove(); // tüm listeyi siler

// istediğimiz elemanı silemek için 

// taskList.childNodes[1].remove(); // karşık bir yöntem

// taskList.children[1].remove();




const taskList = document.querySelector("#task-list");

// ikinci elemanı sil
taskList.children[1].remove();

// tüm çocuk elemanların class özelliğini kaldır
for (let i = taskList.children.length - 1; i >= 0; i--) {
    taskList.children[i].removeAttribute("class");
}

console.log(taskList);
