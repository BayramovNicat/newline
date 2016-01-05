$('.navbar-toggle').on('click', function(){
	$(this).toggleClass('active');
	$(this).find('i').toggleClass('nl-icon-close');
	$($(this).data('target')).toggleClass('valign-wrapper');
	$('.navbar-inverse').toggleClass('collapsed');
	$('main').toggleClass('blur');
	$('.navbar-header>*').toggleClass('blur');
});

$('#header-carousel').owlCarousel({
	items: 1,
    nav: true,
    navText: [
		'<i class="nl-icon-left-arrow"></i>',
		'<i class="nl-icon-right-arrow"></i>'
	],
    loop:true,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});

$('#header-carousel-mob').owlCarousel({
	items: 1,
    nav: true,
    navText: [
		'<i class="nl-icon-left-arrow"></i>',
		'<i class="nl-icon-right-arrow"></i>'
	],
    loop:true,
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

$(document).scroll(function() {
	var scrollTop = $(document).scrollTop();
	if ($(document).scrollTop() >= 80) {
		$('.navbar').removeClass('transparent');
	} else {
		$('.navbar').addClass('transparent');
	}
} );