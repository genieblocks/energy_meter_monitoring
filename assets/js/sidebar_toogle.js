$(document).ready(function () {

    //venue bar collapse
    var contentLeftVisible = true;
    $(".side-toogle").click(function () {

        if (contentLeftVisible) {
            $('.rotate-button-closed').addClass('hidden');
            $('.rotate-button-opened').removeClass('hidden');
            // $('#content-right').addClass('content-right');
            // $('#content-left').removeClass('hidden');
        } else {

            $('.rotate-button-closed').removeClass('hidden');
            $('.rotate-button-opened').addClass('hidden');
            // $('#content-right').removeClass('content-right');
            // $('#content-left').addClass('hidden');
        };
        contentLeftVisible = !contentLeftVisible;
    });
});