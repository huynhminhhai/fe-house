$(document).ready(function () {
    $(".notfound__form").validate({
        rules: {},
        submitHandler: function (form, e) {
            e.preventDefault();
        },
    });
});
