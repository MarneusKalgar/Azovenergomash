$(function() {

	page();

	header();

	mainNav();

	mobileMenuToggle();

	promo();

	projectSlider();

	scrollToTop();

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

		if ( $(this).scrollTop() ) {
			$header.addClass('header--isFixed');
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
		if ( $(this).scrollTop() >= $location.position().top - 50 && 
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
		if ( $(this).scrollTop() >= $similar.position().top - 50 && 
				$(this).scrollTop() < $similar.position().top + $similar.height()  ) {
			$menu.find($item.eq(2)).find($link).addClass('main-nav__link--active');
		} else {
			$menu.find($item.eq(2)).find($link).removeClass('main-nav__link--active');
		}

		// .contacts section
		if ( $(this).scrollTop() >= $contacts.position().top - 50 && 
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
	var $slide = $('.project-slider__slide');

	//activate styles if js is available
	$slider.addClass('project-slider--isScript');

	$slide.hide();

	if ( $slide.hasClass('project-slider__slide--active') ) {
		$slide.show();
	}
	$toggleRight.show();

	//handle click
	$toggleRight.on('click', changeSlider);

	function changeSlider() {
		var $currentSlide = $('.project-slider__slide--active');
		var $nextSlide = $currentSlide.next();
		var $slide = $('.project-slider__slide');
		var speed = 400;
	
		if ($nextSlide.length === 0) {
			$nextSlide = $slide.first();
		}
		$currentSlide.fadeOut(400).removeClass('project-slider__slide--active');
		$nextSlide.fadeIn(400).addClass('project-slider__slide--active');
	}

}


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
	