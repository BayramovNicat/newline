$(document).ready(function() {

	// Menu settings
	$('.navbar-toggle').on('click', function(){
		var btn = $(this);
		if(!btn.hasClass('active')){
			$('.navbar.navbar-inverse').addClass('collapsed')
		}
		$($(this).data('target')).fadeToggle('200',function(){
			if(btn.hasClass('active')){
				$('.navbar.navbar-inverse').removeClass('collapsed');
			}
			btn.toggleClass('active');
		}).addClass('open').css("display","flex");
		
		$('main').toggleClass('blur');
	});
 
	$('#header-carousel').owlCarousel({
		items: 1,
	    nav: true,
	    navText: [
			'<i class="fa fa-arrow-left fa-2x"></i>',
			'<i class="fa fa-arrow-right fa-2x"></i>'
		],
	    loop:true,
	    animateOut: 'fadeOut',
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true
	});

	$('#sponsor-carousel').owlCarousel({
		items: 10,
		nav: false,
		dots: false,
	    loop:true,
	    slideBy: 10,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    responsive : {
		    1600 : {
		        items: 10,
		        slideBy: 10,
		    },
		    1300 : {
		        items: 8,
		        slideBy: 8,
		    },
		    1000 : {
		        items: 6,
		        slideBy: 6,
		    },
		    768 : {
		        items: 4,
		        slideBy: 4,
		    },
		    0 : {
		        items: 2,
		        slideBy: 2,
		    }
		}
	});
 
});

$(window).scroll( function() {
	var scrollTop = $( window ).scrollTop();
	if ($(window).scrollTop() >= 80) {
		$('.navbar').removeClass('transparent');
	} else {
		$('.navbar').addClass('transparent');
	}
} );