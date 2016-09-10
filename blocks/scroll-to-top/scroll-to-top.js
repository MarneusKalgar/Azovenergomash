/*******************************************/
/* 							scroll to top
/********************************************/
function scrollToTop() {

	var $scrollBtn = $('.scroll-to-top');

	$(window).scroll(function() {
		if( $(this).scrollTop() > 500 ) {
			$scrollBtn.addClass('scroll-to-top--fadeIn');
			if ( $scrollBtn.hasClass('scroll-to-top--fadeOut') ) {
				$scrollBtn.removeClass('scroll-to-top--fadeOut');
			}
		} else {
			$scrollBtn.addClass('scroll-to-top--fadeOut');
			if ( $scrollBtn.hasClass('scroll-to-top--fadeIn') ) {
				$scrollBtn.removeClass('scroll-to-top--fadeIn');
			}
		}
	});
	
	$scrollBtn.click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var offset = $(id).offset().top;
		$('html, body').animate({'scrollTop': offset}, 500)
	});

}
	