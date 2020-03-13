$(document).ready(function() {
    $('.owl-slider').hide();
    $('.owl-slider').eq(0).show();

    $('ul.tabs>li>p').click(function(){
        $('ul.tabs>li>p').removeClass('active')
        $(this).addClass('active')
        $('.owl-slider').hide();

        var tabid = $(this).attr('rel');

        $('#'+tabid).show();
    });
    // acodian menu
    $('#header .headIco > li:first-child a').click(function(){
        if($('.resNav').hasClass('on')) {
            $('.resNav').removeClass('on').hide();
        }
        else {
            $('.resNav').show().addClass('on');
        }
    });

    $('.resNav dd').hide()
    $('.resNav dt').click(function(){
        $(this).siblings('dd').slideToggle(600)
    })
    //serch form
    $('#header .headIco > li:last-child a').click(function(){
        $('.resForm').show().addClass('on');
    });
});
    

