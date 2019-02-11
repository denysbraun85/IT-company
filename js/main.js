/* Nav-collapse button */
$('.nav-bar-collapse').on('click', function(){
    $(this).toggleClass('nav-collapse-active');
    $('.main-nav').toggleClass('open');
});

/* Back to top button */
$(window).on('scroll', function(){
    var wScroll = $(this).scrollTop();
    if(wScroll > 700){
        $('#back-btn').fadeIn();
    }else{
        $('#back-btn').fadeOut();
    }
});
$('#back-btn').on('click', function(){
    $('body,html').animate({
        scrollTop: 0
    }, 600);
});

/* Magnific popup */
$('.portfolio-card-container').magnificPopup({
    delegate: '.lightbox', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
});

/* Preloader */
$(window).on('load', function() {
    $("#preloader").delay(600).fadeOut();
});

/* Fixed nav */
$(window).on('scroll', function() {
    var scroll = $(this).scrollTop();
    if(scroll > 1){
        $('#nav').addClass('fixed-nav');
        // $('.logo-text').css('display','none');
    }else{
        $('#nav').removeClass('fixed-nav');
        // $('.logo-text').css('display','block');
    }
});

/* Scrollspy */
$('body').scrollspy({
    target: '#nav',
    offset: $(window).height() / 2
});
$("#nav .main-nav a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 600);
});

/* Slider features */
$(document).ready(function(){
    $('.slider-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: "slider-dots",
        infinite: true,
        fade: true,
        cssEase: 'linear',
        arrows: true
});
});

/* Slider feedback */
$(document).ready(function(){
    $('.feedback-slider-container').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: "slider-dots"
                }
            }
        ]
    });
});