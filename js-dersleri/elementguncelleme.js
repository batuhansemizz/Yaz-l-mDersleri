
// element güncelleme


// .card-header sınıfına sahip elementi seç
const cardHeader = document.querySelector(".card-header");

// Yeni bir h2 elementi oluştur
const h2 = document.createElement("h2");

// h2 elementine card-header sınıfını ekle
h2.setAttribute("class", "card-header");

// h2 elementine "yeni yazılar" metnini ekle
h2.appendChild(document.createTextNode("yeni yazılar"));

// .card sınıfına sahip parent elementi seç
const parent = document.querySelector(".card");

// cardHeader elementini h2 elementi ile değiştir
parent.replaceChild(h2, cardHeader);

 
// Classlarda güncelleme 

// #tas-list ID'sine sahip elementi seç
const tasklist = document.querySelector("#task-list");

let value;
// İlk çocuk elementin (li) ilk çocuk elementini (a) seç
link = tasklist.children[0].children[0];

// link elementinin className değerini al
value = link.className;

console.log(value);
