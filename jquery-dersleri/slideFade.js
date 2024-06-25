$(document).ready(function () {
    // Belge yüklendiğinde çalışacak olan işlev
    $("#fadeup").click(function(){
        // #slideup id'li düğmeye tıklandığında
        $("div").fadeIn("slow"); // <div> öğelerini yavaşça yukarıya doğru kaydırarak gizle
    });

    $("#fadeout").click(function(){
        // #slidedown id'li düğmeye tıklandığında
        $("div").fadeOut("slow"); // <div> öğelerini yavaşça aşağıya doğru kaydırarak göster
    });

    $("#toggle").click(function(){
        // #toggle id'li düğmeye tıklandığında
        $("div").slideToggle("slow"); // <p> öğelerini hızlıca gizle veya göster
    });
});

