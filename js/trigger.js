let menuVisible = false;

function showMenu() {
    $('.blur').css({
        'backdrop-filter': 'blur(2px)',
        'display': 'block'
    });
    $('#menu').css({
        // 'top': '1.5%',
        'transform': 'none'
    });
    $('#trigger').css('transform', 'scaleX(2.5)');
    
    menuVisible = true;
    console.log('k');
}

function hideMenu() {
    $('.blur').css({
        'backdrop-filter': 'blur(0px)',
        'display': 'none'
    });
    $('#menu').css({
        // 'top': '1.5%',
        'transform': 'translate(-25em)'
    });
    $('#trigger').css('transform', 'scaleX(1)');
    
    menuVisible = false;
    console.log('j');
}

$(document).ready(function () {
    $('#trigger').hover(function (e) {
        var distance = parseInt(e.pageX);
    
        if (distance > 500) {
            if (menuVisible)
                hideMenu();
        } else if (distance < 200) {
            if (!menuVisible)
                showMenu();
        }    
    });
});