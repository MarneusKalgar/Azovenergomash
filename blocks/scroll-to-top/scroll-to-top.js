/*******************************************/
/* 							scroll to top
/********************************************/
function scrollToTop() {

	var $scrollBtn = $('.scroll-to-top');
	var $scrollPromo = $('.promo__sign');

	$(window).scroll(function() {
		if( $(this).scrollTop() > 800 ) {
			$scrollBtn.fadeIn();
		} else {
			$scrollBtn.fadeOut();
		}
	});
	
	$scrollBtn.click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var offset = $(id).offset().top;
		$('html, body').animate({'scrollTop': offset}, 500)
	});

	$scrollPromo.click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var offset = $(id).offset().top + 140;
		$('html, body').animate({'scrollTop': offset }, 500)
	});

}
	