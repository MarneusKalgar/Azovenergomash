/*******************************************/
/* 							menu-btn
/********************************************/
function mobileMenuToggle() {

	var $menuBtn = $('.menu-btn');
	var $menu = $('.main-nav');

	$menuBtn.click(function() {
		$menu.slideToggle();
	});

}