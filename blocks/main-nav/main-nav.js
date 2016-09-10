/*!********************************************
								main nav
**********************************************/
function mainNav() {

	var $nav = $('.main-nav');
	var $menu = $('.main-nav__menu');
	var $item = $('.main-nav__item');
	var $link = $('.main-nav__link');
	var $btn = $('.menu-btn');

	$item.first().find($link).addClass('main-nav__link--active')
		.closest($menu).find($item).siblings().find($link).removeClass('main-nav__link--active');
	
	//click handler
	$link.on('click', function() {

		$(this)
			.addClass('main-nav__link--active')
			.closest($menu).find($item)
			.find($link.siblings()).removeClass('main-nav__link--active');

		if ($btn.is(':visible')) {
			$nav.slideToggle();
		} else {
			$nav.stop();
		}
			
		if ($(this).hasClass('main-nav__link--active')) {
			$(this).removeClass('main-nav__link--active');
		} else {
			$(this).addClass('main-nav__link--active');
		}

		var id = $(this).attr('href');
		var offset = $(id).offset().top - 30;
		$('html, body').animate({'scrollTop': offset}, 700);

	});

}