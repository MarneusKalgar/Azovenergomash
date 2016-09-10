/*******************************************/
/* 							menu-btn
/********************************************/
function mobileMenuToggle() {

	var $menuBtn = $('.menu-btn');
	var $menu = $('.main-nav');
	var $page = $('.page');
	var inter;

	
	if ( $(window).width() < 1280 ) {
		$menu.hide();
	}

	$(window).resize(function() {
		if ( $(this).width() < 1280 ) {
			$menu.hide();
		} else {
			$menu.show();
		}
	});


	//click handler
	$menuBtn.click(function() {
		if ( $menu.is(':hidden') ) {
			$menu.slideDown();
		} else {
			$menu.slideUp();
		}
	});

}