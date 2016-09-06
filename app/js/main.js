$(function() {

	page();

	header();

	mainNav();

	mobileMenuToggle();

	scrollToTop();

	projectSlider();

});
/*********************************************
		initialize Google Maps JavaScript API
*********************************************/
function initMap() {

	var center1 = new google.maps.LatLng(50.407372, 30.555019); //for #azovenergo
	var center2 = new google.maps.LatLng(50.438016, 30.551959); //for #azovenergomash

	var mapProp1 = {
		center: center1,
		zoom: 16,
		disableDefaultUI:true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapProp2 = {
		center: center2,
		zoom: 17,
		disableDefaultUI:true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map1 = new google.maps.Map(document.querySelector("#azovenergoMap"), mapProp1);
	var map2 = new google.maps.Map(document.querySelector("#azovenergomashMap"), mapProp2);

	var marker1 = new google.maps.Marker({
		position: center1
	});
	var marker2 = new google.maps.Marker({
		position: center2
	});
	marker1.setMap(map1);
	marker2.setMap(map2);
}
/*******************************************/
/* 							header
/********************************************/
function header() {

	var $header = $('.header');
	var $promo = $('.promo');

	$(window).scroll(function() {

		if ( $(this).scrollTop() > 70 ) {
			$header.addClass('header--isFixed');
			$header.slideDown();
			$promo.addClass('promo--isPositioned');
		} else {
			$header.removeClass('header--isFixed');
			$promo.removeClass('promo--isPositioned');
		}

	});

}
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
/*********************************************
/*							project-slider
*********************************************/
function projectSlider() {

	var interval;
	var pause = 4000;
	var $toggleRight = $('.project-slider__toggle-right');
	var $slider = $('.project-slider');

	$toggleRight.on('click', changeSlider);

	function start() {
		interval = setInterval(changeSlider, pause);
	}

	function stop() {
		clearInterval(interval);
	}

	$slider.on('mouseenter', stop).on('mouseleave', start);
	start();

	function changeSlider() {
		var $currentSlide = $('.project-slider__slide--active');
		var $nextSlide = $currentSlide.next();
		var $slide = $('.project-slider__slide');
		var speed = 400;
	
		if ($nextSlide.length === 0) {
			$nextSlide = $slide.first();
		}

		$currentSlide.fadeOut(speed).removeClass('project-slider__slide--active');
		$nextSlide.fadeIn(speed).addClass('project-slider__slide--active');
	}

}


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
	