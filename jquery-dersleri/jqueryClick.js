$(document).ready(function(){
    // Sayfa tamamen yüklendiğinde çalışacak olan kodlar buraya yazılır
    $("#p1").click(function(){
       // "p1" id'li element tıklandığında yapılacak işlem buraya yazılır
       $(this).addClass("renklendir");
       // Tıklanan elemente "paragraph" adında bir class eklenir
       // this burada #p1 i temsil ediyor. Karışıklık olmaması için böyle bir kullanım tercih edilmiş 
    });
 });
 