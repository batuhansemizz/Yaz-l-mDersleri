// DOM (Document Object Model) tamamen yüklendikten sonra bu işlev çalışır.
$(document).ready(function () {
    
    // ID'si "animate" olan elemana tıklandığında bu işlev çalışır.
    $("#animate").click(function(){
        
        // ID'si "box" olan elemanı animasyonla değiştir.
        $("#box").animate({
            left: "100px",  // "box" elemanını 100 piksel sola kaydır.
            width: "20px",  // "box" elemanının genişliğini 20 piksel yap.
            height: "20px"  // "box" elemanının yüksekliğini 20 piksel yap.
        }, 3000);  // Bu animasyon 3000 milisaniye (3 saniye) sürer.

        // İlk animasyon tamamlandıktan hemen sonra bu ikinci animasyon başlar.
        $("#box").animate({
            top: "200px",  // "box" elemanını 200 piksel yukarı kaydır.
            width: "1px",  // "box" elemanının genişliğini 1 piksel yap.
            height: "2px"  // "box" elemanının yüksekliğini 2 piksel yap.
        }, "fast");  // Bu animasyon hızlı bir şekilde gerçekleşir.
    });
});
