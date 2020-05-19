// INCLUDE
$(function(){
    $('header').load('../components/header-component.html');
    $('footer').load('../components/footer-component.html');
});

// PRE-lOADER
window.addEventListener('load', () => {
    $('.loading-icon').fadeOut('fast');
})

// NAVBAR - INTERACTIVE BURGER FOR MOBILE DEVICES
$(document).on('click','.navbar-toggle', function(){
    $('.navbar-wrapper').slideToggle(300);
});

// RESET CSS OF NAVBAR WHEN RESIZING
$(window).resize(function(){
    $('.navbar-wrapper').removeAttr('style');
});

window.onscroll = function() {shrinkNav()};
function shrinkNav() {
    // console.log(document.documentElement.clientWidth, window.innerWidth);
    if (document.documentElement.scrollTop > 0 && window.innerWidth >= 800) {
        $('.header-logo').clearQueue().animate({"height": "60px"}, 100);
        $('.header-wrapper').clearQueue().animate({"min-height" : "60px"}, 100);
        $('header').clearQueue().animate({"opacity" : "0.93"}, 1000);
    } 
    else {
        $('.header-logo').clearQueue().animate({"height": "100px"}, 100);
        $('.header-wrapper').clearQueue().animate({"min-height" : "100px"}, 100);
        $('header').clearQueue().animate({"opacity" : "1.0"}, 1000);
    }
}
