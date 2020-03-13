//imageProgress
function imagesProgress(){
  var $container = $("#progress"),
      $progressBar = $container.find(".bubble"),
      $progressText = $container.find(".progress-text"),
      imgLoad = imagesLoaded("body"),	
      imgTotal = imgLoad.images.length,	
      imgLoaded = 0,										
      current = 0,							
      progressTimer = setInterval(updateProgress, 1000 / 60);

  imgLoad.on("progress", function(){
      imgLoaded++;
  });

  function updateProgress(){
      var target = ( imgLoaded / imgTotal) * 100;

      current += ( target - current) * 0.1;
      $progressText.text( Math.floor(current) + '%' );

      if(current >= 100){
          clearInterval(progressTimer);
          //$container.addClass("progress-complete");
          $progressBar.add($progressText)
              .delay(500)
              .animate({opacity: 0},100,function(){
                  $container.animate({top: '-110%'},1000,'easeInOutQuint');
              });
          $("body").addClass("active");
      }
      if(current > 99.98){
          current = 100;
      }
  }	
}


// 메뉴이동

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//menu-ico
$('document').ready(function () {
    var Closed = false;
  
    $('.hamburger').click(function () {
      if (Closed == true) {
        $(this).removeClass('open');
        $(this).addClass('closed');
        Closed = false;
      } else {               
        $(this).removeClass('closed');
        $(this).addClass('open');
        Closed = true;
      }
    });
  });

// acodian menu-new
$(function(){ 
    $("#header .menu-ico").on("click",function(){
      $(".menu").toggleClass("on"); 
    }); 
});


//스크롤시 메뉴버튼 색변화

var cont = $("#contents > section");
var menuBtn = $(".menu-ico");
var textA = $(".textA");
var textB = $(".textB");
var textC = $(".textC");
var works = $(".effect");


$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  
  if(wScroll >= cont.eq(0).offset().top *1.2){
      menuBtn.removeClass("show");
      textA.addClass("show");
  }else{textA.removeClass("show");}
  if(wScroll >= cont.eq(0).offset().top *1.8){
    menuBtn.removeClass("show");
    textB.addClass("show");
  }else{textB.removeClass("show");}
  if(wScroll >= cont.eq(0).offset().top *2){
    menuBtn.removeClass("show");
    textC.addClass("show");
  }else{textC.removeClass("show");}

  if(wScroll >= cont.eq(1).offset().top -200){
      menuBtn.removeClass("show");
      menuBtn.eq(0).addClass("show");
      textB.removeClass("show");
      textC.removeClass("show");
      works.addClass("show");
  }else{works.removeClass("show");}

  if(wScroll >= cont.eq(2).offset().top -100){
      menuBtn.removeClass("show");
      works.removeClass("show");
  }
  if(wScroll >= cont.eq(3).offset().top -100){
      menuBtn.removeClass("show");
      menuBtn.eq(0).addClass("show");
  }
});


//scroll

(function() {

  const scrollElem = document.querySelector('.scroll-position');
  const aboutElem = document.querySelector('#about > h1');
  
  let num = 0;

  window.addEventListener('scroll', function() {
    scrollElem.innerHTML = window.pageYOffset;
  });

  function showValue() {
    let posY = aboutElem.getBoundingClientRect().top;

    if (posY < window.innerHeight * 0.4) {
      aboutElem.classList.add('on');
    } else {
      aboutElem.classList.remove('on');
    }
  }

  window.addEventListener('scroll', function() {
    showValue();
  });

  showValue();

})();

