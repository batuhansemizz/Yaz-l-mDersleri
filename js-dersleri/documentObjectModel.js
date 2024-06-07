// elemntlerin seçilmesi


// documant.getelementById()

let veri;

veri = document.getElementById("header");
veri = document.getElementById("header").id; // sadece id yi gösterir
veri = document.getElementById("header").className, // sadece calass ismini çağırır

veri = document.getElementById("header");

// kısaltılmış hali 

// veri = veri.id; // çıktısı header 
// veri = veri.className;

veri.style.color = "red";
veri.style.fontSize="50px";

document.getElementById("header").innerText = "Yapılacaklar"; // başlı yazısını değiştiri
document.getElementById("header").innerHTML = "<b> Todo List</b>";


console.log(veri)

// document.querySelector()

console.log(document.querySelector("#header"))
console.log(document.querySelector(".baslik"))

console.log(document.querySelector("div"))