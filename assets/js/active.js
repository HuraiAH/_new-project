(function ($) {
   "use strict";

   jQuery(document).ready(function($){
        $(".dream-slide-section").owlCarousel({
		   items:1,
		   loop:true,
		   autoplay:true,
		   mouseDrag:false,
		   touchDrag:false,
		   nav:true,
		   dots:false,
		   navText:["<i class=\'fa fa-angle-left\'></i>","<i class=\'fa fa-angle-right\'></i>"]
		});

        $(".dream-slide-section").on("translate.owl.carousel", function(){
            $(".single-slide h1, .single-slide p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide .fill-slide-btn").removeClass("animated fadeInLeft").css("opacity", "0");
            $(".single-slide .border-slide-btn").removeClass("animated fadeInRight").css("opacity", "0");
        });
        
        $(".dream-slide-section").on("translated.owl.carousel", function(){
            $(".single-slide h1, .single-slide p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide .fill-slide-btn").addClass("animated fadeInLeft").css("opacity", "1");
            $(".single-slide .border-slide-btn").addClass("animated fadeInRight").css("opacity", "1");
        });

        $('.counter-up').counterUp({
            delay: 10,
            time: 2000
        });

        $( "#faq-accordion" ).accordion({
	        collapsible: true,
	    });

	    $('#project-container').mixItUp();

	    $('.project-details ul li a.img-preview').magnificPopup({
		    type: 'image',
		    gallery:{
		      enabled:true
		    }          
        });

        $("#testmonial-carousel").owlCarousel({
		   items:1,
		   loop:true,
		   autoplay:false,
           mouseDrag: false,
           touchDrag: false,
		   nav:true,
		   dots:false,
		   navText:["<i class=\'fa fa-angle-left\'></i>","<i class=\'fa fa-angle-right\'></i>"]
		});

		/* Scroll Up JS*/
        $('.scroll-to-up').fadeOut();
        $(window).scroll(function () {

            if ($(this).scrollTop() > 200) {
                $('.scroll-to-up').fadeIn();
            } else {
                $('.scroll-to-up').fadeOut();
            }
        });
        $('.scroll-to-up').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });

   });

   jQuery(window).load(function(){

   });

}(jQuery));