var card = $('#card'),
    cardFront = $('#card #front'),
    cardBack = $('#card #back'),
    overlay = $('.overlay'),
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
function bufferCard() {
    // keep card margins relative to screen size
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
    overlay.css({
        width : cardWidth + 20,
        height : cardHeight + 20,
        marginTop : bufferTop - 10,
        marginLeft : bufferLeft - 10
    }),

    cardOffset = $('#card #front').offset(), // find coord's of card

    console.log('buffer resize! left = ' + bufferLeft + ' and top = ' + bufferTop);
}
function showOverlay(event) {
    var $this = $(this),
        topic = $this.parent().attr('class'),
        content = $('.overlay div.' + topic);

    console.log(topic),
    overlay.fadeToggle().addClass('visible'),
    content.fadeToggle().addClass('visible'),
    event.stopPropagation();
}
function hideOverlay(event) {
    overlay.fadeToggle(),
    $('.overlay div.visible').fadeToggle().removeClass('visible'),
    event.stopPropagation();
}
// end global functions

// set global behaviors
$(document).ready(function() {
    bufferCard(), // calculate card margins
    $('#card').fadeToggle(1200); // fade card in
}),
$(window).resize(function() {
    bufferCard(), // recalculate card margins
    resizeOverlay(); // recalculate overlay size
}),
$('.overlay div a').click(function(event) {
    event.stopPropagation(); // pop bubble so clicking overlay links don't close overlay
}),

overlay.click(hideOverlay),
$('#card p span').click(showOverlay),
$('#card,.overlay,.overlay div').fadeToggle(20), // hide card and overlay
foldCard(), // fold cardBack against cardFront
flipCard(), // FIXME: initial background flip orients card halves
flipCard(), // FIXME: flip it right way around again
bufferCard(), // sets cardBuffer
$('#card').css({ transformOrigin : '25%' }) // set origin for flip animation

$('#card').click(flipCard);