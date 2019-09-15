$(document).ready(function() {
    setTimeout(function() {
        $("#popup").css("visibility","visible")
        $("#popup").css("opacity","1")
    }, 3000);

    $(".popup__close, .popup__button-dismiss").on("click", function() {
        $("#popup").css("visibility","hidden")
        $("#popup").css("opacity","0")
    });
});

