

// event bubbling 

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card")
const container = document.querySelector(".container")
const deleteItems = document.querySelectorAll(".fa-times")
const ul = document.querySelector("ul");

// burada hepsine aynı olayı verdik ve konsolde her hangi bir şeye basınca hepsi birde çalıştı bunada bubbling denir ( kabarcık )
// bunu önüne geçmek için fonk. a bir e parametresi veririz ve  e.stopPropagation(); kullanırız

form.addEventListener("click",function (e){
    console.log("form");
    e.stopPropagation();
})

cardBody.addEventListener("click",function (e){
    console.log("card Body");
    e.stopPropagation();
})

card.addEventListener("click",function (e){
    console.log("card");
    e.stopPropagation();
})

container.addEventListener("click",function (e){
    console.log("container");
    e.stopPropagation();
})



// capturing ( dıştan içe tetiklenme ) 


form.addEventListener("click",function (e){
    console.log("form");
   
},true)

cardBody.addEventListener("click",function (e){
    console.log("card Body");
  
},true)

card.addEventListener("click",function (e){
    console.log("card");
   
},true)

container.addEventListener("click",function (e){
    console.log("container");
   
},true)


// silme butonlarını bu şekilde yakalmış olduk 

deleteItems.forEach(function(item){
    item.addEventListener("click",function (e) {
        console.log(e.target)
    })
})


// silmek için 

ul.addEventListener("click",function(e){
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove();
    }
});


