$(document).ready(function () {
    $(".faq__header").click(function () {
        $(this).parent().toggleClass("active");
        var content = $(this).siblings(".faq__content");
        if (content.hasClass("active")) {
            content.removeClass("active").animate({ height: 0 }, 300);
        } else {
            content
                .addClass("active")
                .animate({ height: content[0].scrollHeight }, 300);
        }
    });
});
