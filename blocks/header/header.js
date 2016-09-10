/*******************************************/
/* 							header
/********************************************/
function header() {

	var $header = $('.header');
	var $promo = $('.promo');

	$(window).scroll(function() {

		if ( $(this).scrollTop() ) {
			$header.addClass('header--isFixed');
			$promo.addClass('promo--isPositioned');
		} else {
			$header.removeClass('header--isFixed');
			$promo.removeClass('promo--isPositioned');
		}

	});

}