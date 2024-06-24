$(document).ready(function () {
    $("#btn1").click(function () {
        const storeValue = $(".inputField").val();
        if (storeValue) {
            $(".oderList").append(`<li>${storeValue}</li>`);
            $(".inputField").val(''); // Clear the input field
        }
    });

    $(".inputField").keypress(function (e) {
        if (e.which == 13) { // Enter key pressed
            const storeValue = $(".inputField").val();
            if (storeValue) {
                $(".oderList").append(`<li>${storeValue}</li>`);
                $(".inputField").val(''); // Clear the input field
            }
        }
    });

    $(".oderList").on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through');
        $(this).toggleClass('completed');
    });

    $(".btn").click(function () {
        $('.oderList li.completed').remove();
    });
});