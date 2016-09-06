/*!********************************************
								main nav
**********************************************/
function mainNav() {

	var $nav = $('.main-nav');
	var $menu = $('.main-nav__menu');
	var $item = $('.main-nav__item');
	var $link = $('.main-nav__link');

	$link.on('click', function() {

		$(this)
			.addClass('main-nav__link--active')
			.closest($menu).find($item)
			.find($link).removeClass('main-nav__link--active');

		if ($(this).hasClass('main-nav__link--active')) {
			$(this).removeClass('main-nav__link--active');
		} else {
			$(this).addClass('main-nav__link--active');
		}

		var id = $(this).attr('href');
		var offset = $(id).offset().top;
		$('html, body').animate({'scrollTop': offset}, 700);

	});

}