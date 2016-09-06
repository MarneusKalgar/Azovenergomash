/*******************************************/
/* 							page
/********************************************/
function page() {
	var $menu = $('.main-nav__menu');
	var $item = $('.main-nav__item');
	var $link = $('.main-nav__link');

	var $location = $('.location');
	var $similar = $('.similar');
	var $contacts = $('.contacts');

	$(window).scroll(function() {

		// .location section
		if ( $(this).scrollTop() >= $location.position().top && 
				$(this).scrollTop() < $location.position().top + $location.height()  ) {
			$menu.find($item.eq(0)).find($link).removeClass('main-nav__link--active');
			$menu.find($item.eq(1)).find($link).addClass('main-nav__link--active');
		} else if ( $(this).scrollTop() < $location.position().top) {
			$menu.find($item.eq(0)).find($link).addClass('main-nav__link--active');
			$menu.find($item.eq(1)).find($link).removeClass('main-nav__link--active');
		} else {
			$menu.find($item.eq(1)).find($link).removeClass('main-nav__link--active');
		}

		// .similar section
		if ( $(this).scrollTop() >= $similar.position().top - 100 && 
				$(this).scrollTop() < $similar.position().top + $similar.height()  ) {
			$menu.find($item.eq(2)).find($link).addClass('main-nav__link--active');
		} else {
			$menu.find($item.eq(2)).find($link).removeClass('main-nav__link--active');
		}

		// .contacts section
		if ( $(this).scrollTop() >= $contacts.position().top && 
				$(this).scrollTop() < $contacts.position().top + $contacts.height()  ) {
			$menu.find($item.eq(3)).find($link).addClass('main-nav__link--active');
		} else {
			$menu.find($item.eq(3)).find($link).removeClass('main-nav__link--active');
		}

	});
	
}