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

