$(function(){
    $("#header").click(function () {
       $("#content").toggle("fast");   
    });
    $("#close").hide(function () {
        $("#messageBox").hide("slow");
    })
});