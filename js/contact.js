function contactDrop(width, display = true) {
    // $('html, body').css('overflow, hidden');
    $('#contact').css({
        'height': width,
    });
}

$(document).on('mouseenter', '#contact', function () {
    contactDrop('14.5em');
}).on('mouseleave', '#contact', function () {
    contactDrop('3em', false);
});

$(document).on('click', '#contact', function () {
    $('#contact input').focus();
});

$(document).on('focusin', '#contact input', function () {
    $(document).off('mouseleave', '#contact');
}).on('focusout', '#contact input', function () {
    contactDrop('3em', false);
    $(document).on('mouseleave', '#contact', function () {
        contactDrop('3em', false);
    });
});