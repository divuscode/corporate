(function ($) {
	
	$.fn.Sliders = function(options) {
		
		var defaults = {
			speed: 1000,
			interval: 8000,	
			directions:''	
		},

		options = $.extend(defaults, options);
		
		/*
		* slides container
		*/
		
		var slidesContainer = $(this);

		/*
		* each slide in slide container
		*/

		var slides;

		/*
		* slide width, later we used that
		* for animate slide
		*/
		var singleSlideWidth;

		/*
		* number of all slide
		*/
		var slideNumber;
		/*
		* this we used to set left position of
		* slides container
		*/
		var slidesContainerLeft;
		
		/*
		* button direction
		*/

		var buttons;

		/*
		* this we used to remove bug
		* on animation, we used this, not deque
		*/
		var animationInProgress = false;

		var windowWidth;
		var getSlideWidth = function() {
			var width = 0;
			slides.each(function(index, slide){
				width += $(slide).outerWidth();
			})
			return width;
		}
		var initializeSlideWidth = function() {


			var width = getSlideWidth();

			slidesContainer.width( width );
			singleSlideWidth = slides.first().width();

			console.log(width);
			console.log(singleSlideWidth);
		}

		var setPositionSlidesContainer = function() {
			slidesContainerLeft = parseInt(singleSlideWidth * (-1));

			slidesContainer.css("left", slidesContainerLeft);
		}
		var slidePrev = function() {

			if (animationInProgress) {
				return;
			}

			var currentLeft = parseInt(slidesContainer.css("left"));

			var targetLeft = currentLeft - singleSlideWidth;

			var lastSlide = slidesContainer.children().last();

			
 			lastSlide.detach().prependTo( slidesContainer );

 		
 			slidesContainer.css({"left": targetLeft});
 			animationInProgress = true;
			slidesContainer.animate({
				left: currentLeft
			}, 1000, "easeInOutBack",
			 function(){
				animationInProgress = false;
			})
			
		}
		var slideNext = function() {
			if (animationInProgress) {
				return;
			}
			var currentLeft = parseInt(slidesContainer.css("left"));

			var targetLeft = currentLeft - singleSlideWidth;


			animationInProgress = true;
 			
			slidesContainer.animate({
				left: targetLeft
			}, 1000, "easeInOutBack", 
			function(){
 				
 				animationInProgress = false;
				
				var firstSlide = slidesContainer.children().first();
 				firstSlide.detach().appendTo( slidesContainer );

 				slidesContainer.css({"left": currentLeft});
				
			})
		}

		var sliderInterval = function() {
			slideNext();
		}


		var initialize = function() {
			$(document).ready(function(){

				slides = slidesContainer.children();
				windowWidth = $(window).width();
				if( !slides.length){
					return;
				}
				slideNumber = slides.length;
				buttons = options.directions;

				initializeSlideWidth();

				setPositionSlidesContainer();

					buttons.on("click", function(){
						if($(this).data("direction") === "prev") {
							slidePrev();
							
						}
						else {
							slideNext();
						}
					});
				var runSliderInterval = setInterval(sliderInterval, options.interval);

				slidesContainer.hover(function(){

					clearInterval(runSliderInterval);

				}, function(){

					runSliderInterval = setInterval(sliderInterval, options.interval);
				})
					

			})

		}
		initialize();
	};


})(jQuery);
