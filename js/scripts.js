var card = $('#card'),
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
function flipCard() {

    function showFrontContent() {
        $('.back.content').css({ 'z-index' : 0 }),
        $('.front.content').css({ 'z-index' : 2 }),
        console.log('frontcontent shown');
    }
    function showFront() {
        cardFront.css({ 'z-index' : 1 }),
        cardBack.css({ 'z-index' : 0 }),
        showFrontContent();
    }
    function showBackContent() {
        $('.front.content').css({ 'z-index' : 0 }),
        $('.back.content').css({ 'z-index' : 2 }),
        console.log('backcontent shown');
    }
    function showBack() {
        cardFront.css({ 'z-index' : 0 }),
        cardBack.css({ 'z-index' : 1 }),
        showBackContent();
    }

    if (card.hasClass('flipped')) {
        card.transition({ // back-to-front flip
                perspective: '1000px',
                rotateY: '90deg'
            }, 250, 'linear', showFront)
            .transition({
                perspective: '1000px',
                rotateY: '0deg'
            }, 250, 'linear')
            .removeClass('flipped');
    } else {
        card.transition({ // front-to-back flip
                perspective: '1000px',
                rotateY: '90deg'
            }, 250, 'linear', showBack)
            .transition({
                perspective: '1000px',
                rotateY: '180deg'
            }, 250, 'linear')
            .addClass('flipped');
    }
}
function resizeCard() {
    var minPortHeight = 320, // iOS height
        minPortWidth = 460, // iOS width
        minCardHeight = 200, // set min height for later calculations
        minCardWidth  = 400, // set min width for later calculations
        cardHeight = (card.height()),
        cardWidth = (card.width() / 2), // card.width is actually front + back
        portHeight = port.height(), // browser height
        portWidth = port.width(); // browser width

    bufferTop = (portHeight - cardHeight) / 3,
    bufferLeft = (portWidth - cardWidth) / 2,
    card.css({
        marginTop : bufferTop,
        marginLeft : bufferLeft
    }),

    cardOffset = $('#card #front').offset(), // find coord's of card

    $('.content').css({ // position and shape content
        display : 'inline-block',
        position : 'absolute',
        left : cardOffset.left - 6,
        top : cardOffset.top,
        width : cardWidth + 5
    }),
    $('.overlay').fadeOut(),

    $('.content').hide(),

    console.log('resizeCard! cardHeight = ' + cardHeight + ' and cardWidth = ' + cardWidth);
}
function showOverlay(event) {
    var $this = $(this),
        topic = $this.attr('class');

    console.log(topic),
    event.stopPropagation();
}
$('#card p').click(showOverlay),

$('#card p:hover').transition({
    opacity : '.4',
    filter  : 'alpha(opacity=40)'
}, 1000, 'linear'),
// end global functions

// keep card sized
$(document).ready(function() { $('.body').transition({ opacity : 1 }); });
$(window).resize(function() { resizeCard(); });

$('.body').transition({ opacity : 0 }),
foldCard(), // fold cardBack against cardFront
flipCard(), // FIXME: background flip orients card halves
flipCard(), // FIXME: flip it right way around again
resizeCard(), // sets cardBuffer
$('#card').css({ transformOrigin : '25%' }) // set origin for flip animation
    .transition({ opacity : 1 }, 1500, 'linear'); // fade in

$('.body').click(flipCard);