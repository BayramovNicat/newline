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

;(function($) {

		  // Browser supports HTML5 multiple file?
		  var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
		      isIE = /msie/i.test( navigator.userAgent );

		  $.fn.customFile = function() {

		    return this.each(function() {

		      var $file = $(this).addClass('custom-file-upload-hidden'), // the original file input
		          $wrap = $('<div class="file-upload-wrapper">'),
		          $input = $('<input type="text" class="file-upload-input" placeholder="CV-nizi əlavə edin" />'),
		          // Button that will be used in non-IE browsers
		          $button = $('<button type="button" class="file-upload-button">YÜKLƏ</button>'),
		          // Hack for IE
		          $label = $('<label class="file-upload-button" for="'+ $file[0].id +'">YÜKLƏ</label>');

		      // Hide by shifting to the left so we
		      // can still trigger events
		      $file.css({
		        position: 'absolute',
		        left: '-9999px'
		      });

		      $wrap.insertAfter( $file )
		        .append( $file, $input, ( isIE ? $label : $button ) );

		      // Prevent focus
		      $file.attr('tabIndex', -1);
		      $button.attr('tabIndex', -1);

		      $button.click(function () {
		        $file.focus().click(); // Open dialog
		      });

		      $file.change(function() {

		        var files = [], fileArr, filename;

		        // If multiple is supported then extract
		        // all filenames from the file array
		        if ( multipleSupport ) {
		          fileArr = $file[0].files;
		          for ( var i = 0, len = fileArr.length; i < len; i++ ) {
		            files.push( fileArr[i].name );
		          }
		          filename = files.join(', ');

		        // If not supported then just take the value
		        // and remove the path to just show the filename
		        } else {
		          filename = $file.val().split('\\').pop();
		        }

		        $input.val( filename ) // Set the value
		          .attr('title', filename) // Show filename in title tootlip
		          .focus(); // Regain focus

		      });

		      $input.on({
		        blur: function() { $file.trigger('blur'); },
		        keydown: function( e ) {
		          if ( e.which === 13 ) { // Enter
		            if ( !isIE ) { $file.trigger('click'); }
		          } else if ( e.which === 8 || e.which === 46 ) { // Backspace & Del
		            // On some browsers the value is read-only
		            // with this trick we remove the old input and add
		            // a clean clone with all the original events attached
		            $file.replaceWith( $file = $file.clone( true ) );
		            $file.trigger('change');
		            $input.val('');
		          } else if ( e.which === 9 ){ // TAB
		            return;
		          } else { // All other keys
		            return false;
		          }
		        }
		      });

		    });

		  };

		  // Old browser fallback
		  if ( !multipleSupport ) {
		    $( document ).on('change', 'input.customfile', function() {

		      var $this = $(this),
		          // Create a unique ID so we
		          // can attach the label to the input
		          uniqId = 'customfile_'+ (new Date()).getTime(),
		          $wrap = $this.parent(),

		          // Filter empty input
		          $inputs = $wrap.siblings().find('.file-upload-input')
		            .filter(function(){ return !this.value }),

		          $file = $('<input type="file" id="'+ uniqId +'" name="'+ $this.attr('name') +'"/>');

		      // 1ms timeout so it runs after all other events
		      // that modify the value have triggered
		      setTimeout(function() {
		        // Add a new input
		        if ( $this.val() ) {
		          // Check for empty fields to prevent
		          // creating new inputs when changing files
		          if ( !$inputs.length ) {
		            $wrap.after( $file );
		            $file.customFile();
		          }
		        // Remove and reorganize inputs
		        } else {
		          $inputs.parent().remove();
		          // Move the input so it's always last on the list
		          $wrap.appendTo( $wrap.parent() );
		          $wrap.find('input').focus();
		        }
		      }, 1);

		    });
		  }

}(jQuery));

$('input[type=file]').customFile();

$('.services_list > li > a').on('click',function(e){
	e.preventDefault();
	$(this).parent().toggleClass('active');
	$('.white-overlay').toggle();

	_this = $(this);
	$('html').click(function(event) {
	    //check up the tree of the click target to check whether user has clicked outside of menu
	    if ($(event.target).attr('class')=='white-overlay') {
	       	_this.parent().removeClass('active');
	       	$('.white-overlay').hide();
	        //this event listener has done its job so we can unbind it.
	        $(this).unbind(event);
	    }
    });
});







var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});

// Our markers
markers1 = [
    ['0', 'Title', 40.3881854,49.838135, 'shop','logo-cola.png'],
    ['1', 'Title', 40.3881935,49.8418472, 'school','logo-cola.png'],
    ['2', 'Title', 40.3840258,49.8500762, 'shop','logo-cola.png'],
    ['3', 'Title', 40.3830369,49.8451624, 'second','logo-cola.png']
];
// Our markers
markers2 = [
    ['0', 'Title', 40.384794,49.8409782, 'shop','logo-cola.png']
];

/**
 * Function to init map
 */

function initialize() {
    var center = new google.maps.LatLng(40.384794,49.8409782);
    var mapOptions = {
        zoom: 15,
        center: center,
        scrollwheel: false,
        draggable: true,
        minZoom: 9,
        streetViewControl:false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}

/**
 * Function to add marker to map
 */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];
    var icon = marker[5];

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        icon: {
			url: './img/'+icon, 
			size: new google.maps.Size(96, 81),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(48,81 )
        }
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(15);
        }
    })(marker1, content));
}

/**
 * Function to filter markers by category
 */

filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}

$('.map-filter li').on('click', function(){
	
	$('.map-filter li').removeClass('active');
	filterMarkers($(this).data('value'));
	$(this).addClass('active');
});



function initialize_contact() {
    var center = new google.maps.LatLng(40.384794,49.8409782);
    var mapOptions = {
        zoom: 15,
        center: center,
        scrollwheel: false,
        draggable: true,
        minZoom: 9,
        streetViewControl:false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    map = new google.maps.Map(document.getElementById('map-contact'), mapOptions);
    for (i = 0; i < markers2.length; i++) {
        addMarker(markers2[i]);
    }
}

