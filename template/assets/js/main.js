(function ($) {
    "use strict";
    
jQuery(document).ready(function($){
	new WOW().init();
   
 });

 jQuery(window).load(function(){
     
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
	
 }); 
 
 jQuery(window).on('scroll', function (){

    if (jQuery(window).scrollTop() > 150){
      jQuery('.header-area').addClass('header-bg');
    } else {
      jQuery('.header-area').removeClass('header-bg');
    }

    });

}(jQuery));












