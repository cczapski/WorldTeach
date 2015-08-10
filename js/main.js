

    $('#cssmenu > ul > li:has(ul)').addClass("has-sub");

    $('#cssmenu > ul > li > a').click(function() {
    var checkElement = $(this).next();
    
    $('#cssmenu li').removeClass('active');
    $(this).closest('li').addClass('active'); 
    $(".center-icons").css("display", "block");
    
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active');
      checkElement.slideUp('normal');
    }
    
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('#cssmenu ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    
    if (checkElement.is('ul')) {
      return false;
    } else {
      return true;  
    }   
  });

// if ($(window).width() >= 947){  
//         $(".thirds a").removeAttr('href');
//   } 
    

// $(window).resize(function(){
//   if ($(window).width() >= 947){  
//         $(".thirds span").css("background-image", "none");
//   } 
//   else if ($(window).width() < 947 ){
//     $(".thirds span").css("background-image", "../menu_images/icon_plus.png");
//   }
// });

$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});
