/*******************************************/
/* 							menu-btn
/********************************************/
function mobileMenuToggle() {

	var $menuBtn = $('.menu-btn');
	var $menu = $('.main-nav');
	var $page = $('.page');
	var inter;

	$menuBtn.click(function() {

		if ( $menu.is(':hidden') ) {
			$menu.slideDown();
		} else {
			$menu.slideUp();
			//startCheck();
		}

	});
	

	/*function startCheck() {
		inter = setInterval(checkWidth, 400)
	}

	function stopCheck() {
		clearInterval(inter);
	}

	function checkWidth() {
		$page.width();
		if ($page.width() >= 1263) {
			$menu.show();
			stopCheck();
		} else if ($page.width() < 1263) {
			$menu.css({'display': 'none'});
		}
		console.log($page.width());
	}*/

}