$(document).ready(function(){
// menu
    $('.mn .mnm > a').mouseenter(function(){
        $(this).css('color', '#fff');
        $(this).next('ul').addClass('active').fadeIn();
    });
    $('.mn .mnm').mouseleave(function(){
        $('.mn .mnm > a').css('color', '#aaa');
        $(this).children('ul').removeClass('active').fadeOut();
    });

// newchar
    $('.mc .mcm > a').mouseenter(function(){
        $(this).next('ul').addClass('on').stop().slideDown()
            .parent('li').siblings('li').children('ul').stop().slideUp();
    });

// family site
    $('.family dd').hide();
    $('.family .btn').on('click',function(){
        $(this).toggleClass('active');
        $('.family dd').toggle();
    });
    $('.family').on('mouseleave', function(){
        $('.family .btn').removeClass('active');
        $('.family dd').hide();
    });
});

// main visual
var headerBg = document.getElementById('bg');
window.addEventListener('scroll', function(){
    headerBg.style.opacity = 1 - window.pageYOffset/500 + '';
    // console.log(headerBg.style.opacity);
    headerBg.style.backgroundPositionY = -window.pageYOffset/3 + 'px';
    // console.log(headerBg.style.backgroundPositionY);
});