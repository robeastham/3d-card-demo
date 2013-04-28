var uA = navigator.userAgent,
    card = $('#card'),
    cardFront = $('#card #front'),
    cardBack = $('#card #back'),
    flipper = $('#flipper'),
    port = $(window);
// end global variables

// global functions
function foldCard() {
    cardBack.css({ transformOrigin : '0px 0px' })
            .transition({
                perspective: '800px',
                rotateY: '180deg'
            }, 0, 'linear');
}

function resizeCard() {
    var cardHeight = card.height(),
        cardWidth = card.width(),
        portHeight = port.height(),
        portWidth = port.width();

    console.log('resizeCard! cardHeight = ' + cardHeight + ' and cardWidth = ' + cardWidth);
}
// end global functions

// keep card sized
$(document).ready(function() {
    resizeCard();
});
$(window).resize(function() {
    resizeCard();
});


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

foldCard(),
card.css({ transformOrigin : '25%' }) // for flipping
    .transition({ opacity : 1 }, 1500, 'linear');

flipper.click(function() {

    function showFront() {
        cardFront.css({ 'z-index' : 1 }),
        cardBack.css({ 'z-index' : 0 });
    }
    function showBack() {
        cardFront.css({ 'z-index' : 0 }),
        cardBack.css({ 'z-index' : 1 });
    }

    if (card.hasClass('flipped')) {

    card.transition({
            perspective: '1000px',
            rotateY: '90deg'
        }, 500, 'linear', showFront)
        .transition({
            perspective: '1000px',
            rotateY: '0deg'
        }, 500, 'linear')
        .removeClass('flipped');

    } else {

    card.transition({
            perspective: '1000px',
            rotateY: '90deg'
        }, 500, 'linear', showBack)
        .transition({
            perspective: '1000px',
            rotateY: '180deg'
        }, 500, 'linear')
        .addClass('flipped');

    }
});