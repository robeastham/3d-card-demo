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
    var minPortHeight = 320, // iOS height
        minPortWidth = 460, // iOS width
        minCardHeight = 200, // set min height for later calculations
        minCardWidth  = 400, // set min width for later calculations
        cardHeight = (card.height()),
        cardWidth = (card.width() / 2), // card.width is actually front + back
        cardOffset = $('#card #front').offset(), // find coord's of card
        portHeight = port.height(), // browser height
        portWidth = port.width(); // browser width

        bufferTop = (portHeight - cardHeight) / 3,
        bufferLeft = (portWidth - cardWidth) / 2,
        card.css({
            marginTop : bufferTop,
            marginLeft : bufferLeft
        }),
        $('.content').css({ // position and shape content overlays
            marginTop : bufferTop,
            marginLeft : bufferLeft,
            position : 'absolute',
            left : cardOffset.left - 5,
            top : cardOffset.top,
            opacity : 1
        }),

    console.log('resizeCard! cardHeight = ' + cardHeight + ' and cardWidth = ' + cardWidth);
}
function positionContents() {

}
// end global functions

// keep card sized
$(document).ready(function() {
    resizeCard();
});
//$(window).resize(function() {
//    resizeCard();
//});


foldCard(), // fold cardBack against
card.css({ transformOrigin : '25%' }) // set origin for flip animation
    .transition({ opacity : 1 }, 1500, 'linear'); // fade in

card.click(function() {
    function showFront() {
        cardFront.css({ 'z-index' : 1 }),
        cardBack.css({ 'z-index' : 0 });
    }
    function showBack() {
        cardFront.css({ 'z-index' : 0 }),
        cardBack.css({ 'z-index' : 1 });
    }

    if (card.hasClass('flipped')) {
        card.transition({ // back-to-front flip
                perspective: '1000px',
                rotateY: '90deg'
            }, 500, 'linear', showFront)
            .transition({
                perspective: '1000px',
                rotateY: '0deg'
            }, 500, 'linear')
            .removeClass('flipped');
    } else {
        card.transition({ // front-to-back flip
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