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

