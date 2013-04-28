var uA = navigator.userAgent,
    card = $('#card'),
    flipper = $('#flipper'),
    port = $(window),
    portHeight = port.height(),
    portWidth = port.width();
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
    $('body').addClass('ie8');
} else if (uA.match(/MSIE 7\.0.*/)) {
    $('body').addClass('ie7');
}

console.log('navigator.useragent = ' + uA);
// end browser detection

flipper.click(function() {

    if (card.hasClass('flipped')) {

        card.transition({
            perspective: '800px',
            rotateY: '0deg'

        }, 1500, 'linear').removeClass('flipped');

    } else {

        card.transition({
            perspective: '800px',
            rotateY: '180deg'
        }, 1500, 'linear').addClass('flipped');
    }
});