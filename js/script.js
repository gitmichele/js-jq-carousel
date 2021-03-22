function nextClick(){

    var currentImg = $('.img-container').find('img.js-active')
    var currentDot = $('.dots').find('div.js-background')

    if ((currentImg, currentDot).hasClass('js-last')){

        var nextImg = $('.img-container').find('img.js-first')
        var nextDot = $('.dots').find('div.js-first')

        currentImg.removeClass('js-active')
        nextImg.addClass('js-active')

        currentDot.removeClass('js-background')
        nextDot.addClass('js-background')
    }
    else{

        var nextImg = currentImg.next('img')
        var nextDot = currentDot.next('div')

        currentImg.removeClass('js-active')
        nextImg.addClass('js-active')

        currentDot.removeClass('js-background')
        nextDot.addClass('js-background')
    }
};

function prevClick() {

    var currentImg = $('.img-container').find('img.js-active')
    var currentDot = $('.dots').find('div.js-background')

    if ((currentImg, currentDot).hasClass('js-first')) {

        var prevImg = $('.img-container').find('img.js-last')
        var prevDot = $('.dots').find('div.js-last')

        currentImg.removeClass('js-active')
        prevImg.addClass('js-active')

        currentDot.removeClass('js-background')
        prevDot.addClass('js-background')
    }
    else {

        var prevImg = currentImg.prev('img')
        var prevDot = currentDot.prev('div')
        
        currentImg.removeClass('js-active')
        prevImg.addClass('js-active')

        currentDot.removeClass('js-background')
        prevDot.addClass('js-background')
    }
};

function arrowClick(){

    $('.arrow').animateClick({

        'color': 'red'
    })
};

function init(){

    $('.arrow.right').click(nextClick);
    $('.arrow.left').click(prevClick);
};

init();

$('document').ready(init);