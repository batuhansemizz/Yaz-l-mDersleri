$(document).ready(function(){
    $("#baslik").text("Merhaba, jQuery!");
});

/* js de seçim işlemleri için documant.getElementByıd(""); ile yapardık 
ama jquery de $("selectors") ile yapılır

ıd =>  $("#container")
class =>  $(".class") 
elemnet =>  $("element") // ul , li , a  gibi 

*/

console.log($("#liste")) ;
console.log($("h3")) ;
console.log($("ul")) ;
console.log($("h3")) ;

console.log($(".itembir")); // sadece bir tane li yi seçmek için 

console.log($("a"));

// sadece linin içirindeki  a yı seçmek istersem 
console.log($("li a"))

console.log($("#liste a "))





// Styling => Özellikleri 


$("#header").css("color","orange");
$("#liste a").css("text-decoration","none")
$("a").css("text-decoration","none")

var styles={
    color:"red",
    fontSize:"22px",
    border:"1px solid gray",
}

// yukarıda oluşturduğumuz obje sayesinde daha fazla özellikle veririz ve kullanımı daha kolay olur 

$("ul li").css(styles)


/* eğer her hangi bir elementi mesela ( a ) tüm a elementlerini değiştirmek için 
şöyle bir yöntem uygularız => */

$("a").css({

  color:"green",
  fontSize:"16",
  border:"2px solid blue",

});