$(document).ready(function(){
    $("#open").click(function() {
        $("ul").animate({
          left: "0%"
        }, 300, function() {
          // Animation complete.
        });
        $("#open").toggleClass("hide");
        $("#close").toggleClass("hide");
    });

    $("#close").click(function() {
        $("ul").animate({
          left: "-60%"
        }, 300, function() {
          // Animation complete.
        });
        $("#open").toggleClass("hide");
        $("#close").toggleClass("hide");
    });

    $('li').hover(function(){
        $(this).css("background-color", "rgba(255, 52, 51, .9)")

    }, function(){
        $(this).css("background-color", "rgba(28, 22, 22, .9)")
    });
});