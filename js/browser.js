var uA = navigator.userAgent,
    body = $('body');

// start QAD browser detection
    if (uA.match(/Firefox\/.*/)) {
        body.addClass('firefox');
    } else if (uA.match(/Mozilla\/.*Fennec.*/)) {
        body.addClass('firefox mobile');
    } else if (uA.match(/Chrome\/.*/)) {
        body.addClass('chrome');
    } else if (uA.match(/Chrome\/.*Mobile.*/)) {
        body.addClass('chrome mobile');
    } else if (uA.match(/.*iPhone.*/)) {
        body.addClass('safari mobile iphone');
    } else if (uA.match(/iPad\/.*/)) {
        body.addClass('safari mobile ipad');
    } else if (uA.match(/Safari\/.*/)) {
        body.addClass('safari');
    } else if (uA.match(/MSIE 9\.0.*/)) {
        body.addClass('ie9');
    } else if (uA.match(/MSIE 8\.0.*/)) {
        body.addClass('ie8');
    } else if (uA.match(/MSIE 7\.0.*/)) {
        body.addClass('ie7');
    }
    console.log('navigator.useragent = ' + uA);
// end browser detection

// mobile layout rendering

if (body.hasClass('mobile')) {
    var mobileWarning = '<p class="mobile">Turn your device sideways for the best experience</p>';

    $('.body').prepend(mobileWarning),
    $('p.mobile').fadeOut();
};

function hideWarning() {
    $('p.mobile').slideUp(1500);
}

$(document).ready(function() {
    $('p.mobile').fadeIn(2000,hideWarning);
});