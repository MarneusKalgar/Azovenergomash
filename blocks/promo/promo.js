/*******************************************/
/* 							promo
/********************************************/
function promo() {

	//click handler
	var $scrollPromo = $('.promo__sign');

	$scrollPromo.click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var offset = $(id).offset().top;
		$('html, body').animate({'scrollTop': offset }, 500)
	});

	//parallax
	var $parallaxBg = $('.promo__parallax');
	var $promo = $('.promo');
	var $window = $(window).width();
	console.log($window);
	
	$(window).on('scroll', scrollBg);

	if ( $window < 1280 ) {
		$(window).off('scroll', scrollBg);
		$parallaxBg.css({"top": 0});
	}

	$(window).resize(function() {
		console.log($(this).width());

		if ( $(this).width() > 1280 ) {
			$(this).on('scroll', scrollBg);
		} else {
			$(this).off('scroll', scrollBg);
			$parallaxBg.css({"top": 0});
		}
	})

	function scrollBg() {
		$scroll = $(window).scrollTop();
		$parallaxBg.css({"top": $scroll * .7 + "px"});
	}

}