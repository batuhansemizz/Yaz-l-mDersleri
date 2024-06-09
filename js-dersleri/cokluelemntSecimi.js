// ÇOKLU ELEMAN SEÇİMİ  

// documanet.getElemantsByClassName()


let veri;
// veri = document.getElementsByClassName("list-group-item")
// veri = document.getElementsByClassName("list-group-item")[0]; istediğimiz index  e ulaşırız

// veri = veri[0] // kısaltılmışı

// veri[0].style.fontSize = "30px";
// veri[0].style.color = "red";
// veri[2].textContent = "new item";

// hepsine tek tek yazmak yerine döngüyle hepsini yaza biliriz
// for (let i=0; i<veri.length; i++) {
//     console.log(veri[i].style.color="orange")
//     console.log(veri[i].textContent="new item")
// }

// farklı bir yöntem daha 

// veri = document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a");

veri = document.getElementById("task-list").getElementsByTagName("a"); // task-list in içerisindeki a etiketine ulaşırız

veri = document.querySelectorAll("li"); 

veri.forEach(function(item, index){
    // console.log(item)
    item.textContent=`${index} - item `; // çıktısı => 0 - item 1 - item 2 - item  3 - item
});

// çıktısı 

// li.list-group-item

// li.list-group-item

// li.list-group-item

// li.list-group-item

console.log(veri);

