// Element oluşturma


const li = document.createElement("li");

// ad class

li.className = "list-group-item"; // li etiketine calss eklendi

// attribute

li.setAttribute("title","new item") //  <li class="list-group-item" title="new item"></li>
li.setAttribute("data-id","5") // <li class="list-group-item" title="new item" data-id="5"></li>
const text = document.createTextNode("yaratılan item");
li.appendChild(text); // <li class="list-group-item" title="new item" data-id="5">yaratılan item</li>

const a = document.createElement("a");
a.setAttribute("href","#");
a.className="delete-item";

li.appendChild(a);

document.querySelector("#task-list").appendChild(li);



console.log(li)



/*
bu örnekten bir element oluşturum onu listeye ekledik. Bunu yaparken ilk olarak 
li etiketimi oluşturuyoruz sonraında etiketin className i varsa id varda etiketin içinde farklı a ve başka elementleri oluşturuyoruz ve
tabii onlarında className veya vars id lerini yazıyoruz. sonrasnda li de ne yazacaksan onun textContentini oluşturum set edşyoruz.
sonra bu li yi eklemek istediğimiz yeri id si ile appendchild ile ekliyoruz örnekteki gibi.
*/