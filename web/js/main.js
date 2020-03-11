$(document).ready(function() {
	$('.grid1').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true
	});

	$grid.imagesLoaded().progress( function() {
  		$grid.isotope('layout');
	});
});

//slider 1 with arabs

$('.slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'ease-out',
		autoplay: true,
		speed: 1200
});

//slider 2 with arabs2

$('.slider1').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'ease-out',
		autoplay: true,
		speed: 1200
});

//фільтрація зображень
$(document).ready(function() {
	var $grid = $('.grid').isotope({
	  	itemSelector: '.grid-item'
	});

	$('.filters-button-group').on( 'click', 'li', function() {
  		var filterValue = $( this ).attr('data-filter');

  		$grid.isotope({ filter: filterValue });
	});


	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  	$buttonGroup.on( 'click', 'li', function() {
	    	$buttonGroup.find('.is-checked').removeClass('is-checked');
	   		$( this ).addClass('is-checked');
  		});
	});
});

//плавний перехід
$("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if ($.browser) {
            $('body').animate({ scrollTop: destination }, 1100);
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        return false; 
    });

    //появлення стрілки вверх
    $(window).scroll(function(){
            var bo = $(this).scrollTop();
             
			if ( bo >= 800) {
				$("#updown").stop().animate({'opacity':'1'}, 500);
			};

        	if ( bo < 800) {
        		$("#updown").stop().animate({'opacity':'0'}, 500);
        	};
    });

    //переміщення вверх сторінки
    $('#head').click(function() {
    	$('html, body').animate({scrollTop: 0}, 500);
    	return false;
  	});	


//map
function initMap() {
  
  var uluru = {lat: 48.9078, lng: 24.6966856};
  
  var map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 18,
      	center: uluru
      	}
      );
 
  var marker = new google.maps.Marker(
  	{position: uluru,
  	 map: map
  	});
}