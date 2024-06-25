console.log($("h3").text())

console.log($("ul li ").text())


$("h3").text("JavaScript") // başlığın yazısını değiştiren text() methodu


function kayıtOl(){
    var ad=$("#ad").val(); // buradaki val() methodu #ad id li inputa girilen değeri ad değişkenine atar 
    var soyad=$("#soyad").val(); // buradaki val() methodu #soyad id li inputa girilen değeri soyad değişkenine atar 
    
    console.log(ad+""+soyad+""+"kursa kayıtlı")
     

    // class ekleyebiliriz

    $("#ad").addClass("highlight")
    $("#soyad").addClass("orange")

    // toggleClass eğer class yoksa ekliyor varsa değiştiriyor

    $("#ad").toggleClass("highlight")
    $("#soyad").addClass("orange")

    // remove class 

    /*

    $("#ad").removeClass("highlight")
    $("#soyad").addClass("orange")

    */

    // attribute methodu ile görselin boyutlarını gösteriyoruz 
   
} 
$("img").attr("width","100")