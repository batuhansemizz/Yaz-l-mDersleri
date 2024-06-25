// Belge yüklendiğinde (DOM hazır olduğunda) işlev çalıştırılacak
$(document).ready(function() {
    // Tüm ".control" sınıfına sahip öğelerde değişiklik olayını dinleyelim
    $(".control").change(function(){
       // Değişiklik olayı tetiklendiğinde konsola seçilen öğenin değerini yazdıralım
       console.log($(this).val());
    });
 });
 