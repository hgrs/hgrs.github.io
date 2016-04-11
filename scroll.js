$(function() {
    
  $('a[href*=#]:not([href=#])').click(function() {
      
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

$(document).ready(function () {

    $('.menu-icon').click(function () {
        if ($('#navigator').css("left") == "-500px") {
            $('#navigator').animate({left: '0px'}, 500);
            $('.menu-icon').animate({left: '0px'}, 500);
            $('.menu-text').animate({left: '300px'}, 500).empty().text("Close");
        } 
        else  {
            $('#navigator').animate({left: '-500px'}, 500); 
            $(this).animate({left: '0px'}, 500);
            $('.menu-text').animate({left: '50px'}, 500).empty().text("Menu");

        } 
	});
    $('.menu-icon').click(function () {
	            $(this).toggleClass("on"); });
    
});