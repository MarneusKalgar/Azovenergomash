/*******************************************/
/* 							header
/********************************************/
function header() {

	var $header = $('.header');
	var $promo = $('.promo');

	$(window).scroll(function() {

		if ( $(this).scrollTop() > 70 ) {
			$header.addClass('header--isFixed');
			$header.slideDown();
			$promo.addClass('promo--isPositioned');
		} else {
			$header.removeClass('header--isFixed');
			$promo.removeClass('promo--isPositioned');
		}

	});

}