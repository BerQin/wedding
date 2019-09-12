
function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Preloader
    ======================================*/
	
  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 
    /*====================================
    Show Menu on Book
    ======================================*/
    var timer = null;
    $(window).bind('scroll', function() {
        var navHeight = $('#header-top').height() - $('#menu').height();
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
        clearInterval(timer);
        $('#go-btn').removeClass('active');
        setTimeout(function() {$('#go-btn').css('display', 'none');}, 1000)
        timer = setInterval(function() {
            $('#go-btn').css('display', 'block');
            setTimeout(function() {$('#go-btn').addClass('active');}, 100)
        }, 1000);

    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

  	$(document).ready(function() {

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $container.on('click', '.portfolio-item', function() {
            $('#go-btn').css('right', '17px');
            $(document).find($(this).find('.portfolio-link').attr('href')).find('img').each(function(){
                if (!$(this).attr('src')) {
                    $(this).attr('src', $(this).attr('data-src'));
                }
            });
        });
        $(document).on('click', '.close-modal', function() {
            $('#go-btn').css('right', '0');
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

  	/*====================================
    WOW JS
    ======================================*/	

	new WOW().init();
	//smoothScroll
	// smoothScroll.init();


	
}());


}
main();