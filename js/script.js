function nextClick(){

    var currentImg = $('.img-container').find('img.js-active')

    if (currentImg.hasClass('js-last')){

        var nextImg = $('.img-container').find('img.js-first')
        currentImg.removeClass('js-active')
        nextImg.addClass('js-active')
    }
    else{

        var nextImg = currentImg.next('img')
        currentImg.removeClass('js-active')
        nextImg.addClass('js-active')
    }
};

function prevClick() {

    var currentImg = $('.img-container').find('img.js-active')

    if (currentImg.hasClass('js-first')) {

        var prevImg = $('.img-container').find('img.js-last')
        currentImg.removeClass('js-active')
        prevImg.addClass('js-active')
    }
    else {

        var prevImg = currentImg.prev('img')
        currentImg.removeClass('js-active')
        prevImg.addClass('js-active')
    }
};

function init(){

    $('.arrow.right').click(nextClick);
    $('.arrow.left').click(prevClick);
};

init();

$('document').ready(init);