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
          left: "-40%"
        }, 300, function() {
          // Animation complete.
        });
        $("#open").toggleClass("hide");
        $("#close").toggleClass("hide");
    });
});