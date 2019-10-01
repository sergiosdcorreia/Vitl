$(function() {
    setTimeout(function() {
        $("#popup").show();
    }, 3000);

    $(".popup__close").add(".popup__button-dismiss").on("click", function() {
        $("#popup").hide();
    });
});

