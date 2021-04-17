
(function($) {

	"use strict";
	
  // Scrollax
  $.Scrollax();

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	/* Proloder */
	/*
    $(window).on('load', function () {
		$('#preloader-active').delay(500).fadeOut('slow');
	});
	*/
	
	var loader = function() {
		setTimeout(function() { 
			$('#preloader-active').fadeOut('slow');
		}, 1500);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:1,
	        nav:false
	      },
	      1000:{
	        items:1,
	        nav:false
	      }
	    }
		});
		$('.menu').owlCarousel({
			autoplay: false,
			autoplayHoverPause: false,
			center: false,
			loop: false,
			items:1,
			margin: 0,
			stagePadding:0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1,
					stagePadding: 0
				},
				600:{
					items: 2,
					stagePadding: 50
				},
				900:{
					items: 3,
					stagePadding: 100
				},
				1200:{
					items: 4,
					stagePadding: 100
				}
			}
		});

	};
	carousel();


	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});
	
	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();
	
	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	//scroll to element
	$('.navbar-nav li > a').click(function (e) {
		e.preventDefault();
		if($(".awake").length) {
			$('html, body').animate({
				scrollTop: $('#' + $(this).data('scroll')).offset().top - 65
			}, 500);
		} else {
			$('html, body').animate({
				scrollTop: $('#' + $(this).data('scroll')).offset().top - 130
			}, 500);
		}
    });

	//add active class on click links

    $('.navbar-nav li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    //add active class on scroll

    $(window).scroll(function () {
        $('.block').each(function () {
            if ($(window).scrollTop() > ($(this).offset().top - 70)) {
                var blockID = $(this).attr('id');
                $('.navbar-nav li a').parent().removeClass('active');
                $('.navbar-nav li a[data-scroll = ' + blockID + ']').parent().addClass('active');
            }
        });
	});
	
	//scroll to menu on view menu click
	$('.view-menu').click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#menu').offset().top - 130
		}, 500);
    });

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
		verticalFit: true
		},
		zoom: {
		enabled: true,
		duration: 300 // don't foget to change the duration also in CSS
		}
  	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

  	//to hide button at the beginning
  	$('#back-top').fadeOut();
  
  	//show and hide go up button
	$(window).scroll(function () {
		if($(window).scrollTop() > 350) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});

  	// Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
	});
	
  /*

  $("html").niceScroll({
    cursorcolor: '#fac564',
    cursorborder: 'none',
    cursorwidth: '8px',
    scrollspeed: '100',
    zindex: '999',
    cursoropacitymin:0.2,
  });

  */
  
})(jQuery);
