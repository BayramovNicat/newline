$(document).ready(function() {
 
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
		nav: true,
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