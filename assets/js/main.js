$(document).ready(function () {
    // loading

    setTimeout(() => {
        $("#preloader").addClass("d-none");
    }, "300");

    // check submenu

    $(".header__item").each(function () {
        if ($(this).has(".header__submenu--list").length > 0) {
            $(this).find(".header__icon--dropdown").removeClass("d-none");
            $(this)
                .find(".header__link")
                .click(function (e) {
                    e.preventDefault();
                });
        }
    });

    // freeze header

    $(window).scroll(function () {
        if (window.pageYOffset >= 99) {
            $(".section__header").addClass("active");
        } else if (window.pageYOffset < 99) {
            $(".section__header").removeClass("active");
        }
    });

    // click header menu

    $(".header__icon--menu").click(function () {
        $(".header__menu").toggleClass("active");
    });

    // slick

    $(".banner__list").slick({
        dots: true,
        autoplay: true,
        infinity: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
    });

    // validate form

    // valid fullname

    jQuery.validator.addMethod(
        "fullname",
        function (value, element) {
            if (
                /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]{2,}(?: [a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+){1,2}$/.test(
                    value
                )
            ) {
                return true;
            } else {
                return false;
            }
        },
        "Please enter a valid full name."
    );

    jQuery.validator.addMethod(
        "email",
        function (value, element) {
            if (/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(value)) {
                return true;
            } else {
                return false;
            }
        },
        "Please enter a valid email."
    );

    $("#search-blog").validate({
        rules: {},
        submitHandler: function (form, e) {
            e.preventDefault();
        },
    });

    $("#comment-form").validate({
        rules: {
            author: {
                required: true,
                fullname: true,
            },
            email: {
                required: true,
                email: true,
            },
        },
        submitHandler: function (form, e) {
            e.preventDefault();
        },
    });

    // button scroll to top

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > offset) {
            $(".progress-wrap").addClass("active-progress");
        } else {
            $(".progress-wrap").removeClass("active-progress");
        }
    });
    $(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, duration);
        return false;
    });
});
