var uA = navigator.userAgent,
    activator = $('#activator');
// end global variables

// start QAD browser detection
if (uA.match(/Firefox\/.*/)) {
    $('body').addClass('firefox');
} else if (uA.match(/Mozilla\/.*Fennec.*/)) {
    $('body').addClass('firefox mobile');
} else if (uA.match(/Chrome\/.*/)) {
    $('body').addClass('chrome');
} else if (uA.match(/Chrome\/.*Mobile.*/)) {
    $('body').addClass('chrome mobile');
} else if (uA.match(/Safari\/.*/)) {
    $('body').addClass('safari');
} else if (uA.match(/.*iPhone\/.*/)) {
    $('body').addClass('safari mobile iphone');
} else if (uA.match(/iPad\/.*/)) {
    $('body').addClass('safari mobile ipad');
} else if (uA.match(/MSIE 9\.0.*/)) {
    $('body').addClass('ie9');
} else if (uA.match(/MSIE 8\.0.*/)) {
    $('body').addClass('ie8');8
} else if (uA.match(/MSIE 7\.0.*/)) {
    $('body').addClass('ie7');
}

console.log('navigator.useragent = ' + uA);
// end browser detection

// activator
activator.hover(function() {
    $(this).transition({
        width: +500,
        x: '-250px'
    })

});

activator.mouseleave(function() {

});