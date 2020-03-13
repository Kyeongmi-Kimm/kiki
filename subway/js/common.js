// nav
$('#header .gnb .sm, .navbg').hide();
	$('#header .gnb .mmbtn').mouseenter(function(){
		$('#header .gnb .sm, .navbg').stop().slideDown(200);
		$(this).addClass('active');
	});
	$('#header .gnb').mouseleave(function(){
		$('#header .gnb .sm, .navbg').stop().slideUp(200);
	});
	$('#header .gnb .mm').mouseleave(function(){
		$(this).find('.mmbtn').removeClass('active');
    });

//slider 
$(document).ready(function(){
    $('.visual-slider').slick({
        nextArrow: false,
        prevArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true
    });
    $('.owl-carousel').owlCarousel({
        items:5,
        margin:10,
    });
});

// tab menu
$(document).ready(function() {
    $('.item-slider').hide();
    $('.item-slider').eq(0).show();

    $('ul.tabs>li>p').click(function(){
        $('ul.tabs>li>p').removeClass('active')
        $(this).addClass('active')
        $('.item-slider').hide();

        var tabid = $(this).attr('rel');

        $('#'+tabid).show();
    });
});
    
