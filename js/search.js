function searchBar(width, display = true) {
    // $('html, body').css('overflow, hidden');
    $('#google').css({
        'width': width,
    });
    $('#google form').css({
        'width': 'auto',
        'display': (display ? 'block' : 'none'),
        // 'background-color': (display ? 'white' : 'rgba(0,0,0,0)')
    });
    $('#google input').css({
        'width': '100%',
        'display': (display ? 'inline-block' : 'none'),
        // 'background-color': (display ? 'white' : 'rgba(0,0,0,0)')
    });
    // $('html, body').css('overflow, visible');
}

$(document).on('mouseenter', '#google', function () {
    searchBar('20%');
}).on('mouseleave', '#google', function () {
    searchBar('44px', false);
});

$(document).on('click', '#google', function () {
    $('#google input').focus();
});

$(document).on('focusin', '#google input', function () {
    $(document).off('mouseleave', '#google');
}).on('focusout', '#google input', function () {
    searchBar('44px', false);
    $(document).on('mouseleave', '#google', function () {
        searchBar('44px', false);
    });
});