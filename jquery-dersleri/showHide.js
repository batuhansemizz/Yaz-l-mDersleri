$(document).ready(function () {
    // Belge yüklendiğinde çalışacak olan işlev
    $("#hide").click(function(){
        // #hide id'li düğmeye tıklandığında
        $("p").hide("slow"); // <p> öğelerini yavaşça gizle
      //  $("p").hide(2000); miliSaniye şeklinde de yazabiliriz
    });

    $("#show").click(function(){
        // #show id'li düğmeye tıklandığında
        $("p").show("slow"); // <p> öğelerini yavaşça göster

        // $("p").show(2000,function() {
        //      alert("yazı tekrardan görüldü");
        //  } ); 
        // içinde tekrar fonksyon yazabiliriz
    });

    $("#toggle").click(function(){
        // #toggle id'li düğmeye tıklandığında
        $("p").toggle("fast"); // <p> öğelerini hızlıca gizle/göster
    });
});
