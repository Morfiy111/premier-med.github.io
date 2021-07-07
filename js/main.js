var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 700,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('autoplay.play.owl', [4000])
})
$('.stop').on('click', function () {
    owl.trigger('autoplay.stop.owl')
})

$(document).ready(function () {
    $('#burger').bind('click', function () {
        $('#burger, #burger-content').toggleClass('show');
    });
});
$('.continue').click(function () {
    $('#burger-content').toggleClass('show');
});


document.querySelector('.search-header button').onclick = function () {
    document.querySelector('.search-input-block').classList.toggle('active');
}
new WOW().init();