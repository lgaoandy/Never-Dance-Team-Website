// INCLUDE
$(function(){
    $('header').load('../components/header-component.html');
    $('footer').load('../components/footer-component.html');
});

// NAVBAR 
$(document).on('click','.navbar-toggle', function(){
    $('nav').slideToggle(100);
});

// BUG FIX - WHEN NAVBAR IS ADJUSTED FROM VERTICAL TO HORIZONTAL, ITS DISPLAY REQUIRES READJUSTMENTS
$(window).resize(function(){
    var width = $(window).width();
    if (width >= 783) {
        $('nav').css('display','flex');
    }
    else {
        $('nav').css('display','none');
    }
});

// RESPONSIVB SOCIAL MEDIA ICONS 
$(document).on('mouseover','.social-media-icon',function(){
    var icon = $(this).attr('icon');
    if (icon === 'youtube'){
        this.src = "../images/icons/youtube-white.png";
    }
    else if (icon === 'instagram'){
        this.src = "../images/icons/instagram-white.png";
    }
    else if (icon === 'facebook'){
        this.src = "../images/icons/facebook-white.png";
    }
});

$(document).on('mouseout','.social-media-icon',function(){
    var icon = $(this).attr('icon');
    if (icon === 'youtube'){
        this.src = "../images/icons/youtube.png";
    }
    else if (icon === 'instagram'){
        this.src = "../images/icons/instagram.png";
    }
    else if (icon === 'facebook'){
        this.src = "../images/icons/facebook.png";
    }
});

