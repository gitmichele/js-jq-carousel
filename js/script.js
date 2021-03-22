function nextClick(){

    var currentImg = $('.img-container').find('img.js-active')
    var nextImg = currentImg.next('img')

    currentImg.removeClass('js-active')
    nextImg.addClass('js-active')
};

function prevClick() {

    var currentImg = $('.img-container').find('img.js-active')
    var prevImg = currentImg.prev('img')

    currentImg.removeClass('js-active')
    prevImg.addClass('js-active')
};

function init(){

    $('.arrow.right').click(nextClick);
    $('.arrow.left').click(prevClick);
};

init();

$('document').ready(init);