$(document).ready(function () {
    // slick

    $(".slide__list").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
    });

    // input range

    $(document).on("input", "#clip-bg", function () {
        console.log($(this).val());
        $(".bg-second").css(
            "clip",
            "rect(0px, 100vw, " + $(this).val() + "vh, 0px)"
        );
    });
});
