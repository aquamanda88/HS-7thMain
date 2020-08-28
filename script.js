$(function(){
  $("#gotop").click(function(){
      jQuery("html,body").animate({
          scrollTop:0
      },1000);
  });
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 300){
          $('#gotop').fadeIn("fast");
      } else {
          $('#gotop').stop().fadeOut("fast");
      }
  });
});

$(document).ready(function (){
    $('.burger-icon').click(function (){
        //$('.active-menu').toggleClass('transition')
        $('.active-menu').toggleClass('d-block')
        
    })
})