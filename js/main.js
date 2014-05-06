(function($){

	 $('#slides-client').Sliders({
	    directions: $('#prev-client.button, #next-client.button'),
	    speed: 1000,
	    interval: 8000
  	});

	$('[data-toggle="tooltip"]').tooltip('hide');
		
	
	/*
	* body
	*/
	var body;
	/*
	* animate body to top
	* we used to get top position
	* type: object
	*/
	var top;


	$('.scroll-nav').click(function(event) {
		
		event.preventDefault();
		var id = $(this).attr("href");
		var target = $(id).offset().top;
		body.stop().animate({scrollTop:target -70 }, 1200);
	});

	var initialize = function(){
		body = $("html, body");	
	}
	initialize();
})(jQuery);

/*
* nav collapse
*/
function collapse(){
	if ($('.navbar-toggle:visible').length) {
		$('.navbar .scroll-nav').click(function () { 
			$(".navbar-collapse").collapse("hide");
		});
	}
}collapse();
	
$(window).resize(function(){
	collapse();
});

/*
* ousr skills circle
*/

(function($){
	var elemenatTriger = $(".our-skils");
	if(!elemenatTriger.length) {
		return;
	}
	var windowHeight = $(window).height();

	        $('.circle-skills').easyPieChart({
	            easing: '',
	            barColor: '#B5D638',
				trackColor: '#D5E0EC',
				scaleColor: '',
				scaleLength: 5,
				lineCap: 'square',
				lineWidth: 5,
				size: 100,
				rotate: 0,
				animate: {
					duration: 3000,
					enabled: true
			},
	            onStep: function(from, to, percent) {
	                $(this.el).find('.percent').text(Math.round(percent));
	            }
	        });
			
})(jQuery);

(function($){

	/*
	* section price tables
	* we used later this to find 
	* when call animation
	* type: object
	*/
	var fuctsSection = $("#fun-fucts");
	if(!fuctsSection.length) {
		return;
	}
	
	/*
	* position when animation started
	* type: intiger
	*/
	var startPosition = fuctsSection.offset().top;
	/*
	* this calculate numbers
	*/
	function animateValue (id, duration, from){
		$(window).unbind("scroll", animateGo);

		/*
		* each element
		* we used to get numbers
		* and return to it
		* type: oject
		*/
		var fuctsNumber;

		/*
		* this is the numbers value
		* type: intiger
		*/
		var to;

		var from;
		fuctsNumber = document.getElementById(id);
		to = fuctsNumber.getAttribute("data-number");


		setInterval(function(){
			if( from > to) {
				from--
				fuctsNumber.innerHTML = "";
				fuctsNumber.innerHTML += from;
			}
		},duration);

	};
	/*
	* this call animate values
	* when scroll came to
	* price section
	*/
	var animateGo = function(){
		if ($(this).scrollTop() > startPosition  ) {
			animateValue("first-number", 5, 400);
			animateValue("second-number", 5, 400);
			animateValue("third-number", 5, 400);
			animateValue("fourth-number", 5, 400);
		};		
	};
	$(window).on("scroll", animateGo);

})(jQuery);

(function($){

	var whoWeAreSection;
	
	var servivcesSection;
	
	var whyChooseUsSection;
	
	var priceTableSection;

	var timlineAnimateSection;

	var windowHeight;

	var startPosition;

	var animateSections = function(){

		whoWeAreSection = $("#who-we-are");

		servivcesSection = $("#services");
		whyChooseUsSection = $("#why-choose-us");
		priceTableSection = $("#price-tables");
		timlineAnimateSection = $("#timeline");
		var setFirstAnimate= function(){
			if (!whoWeAreSection.length) {
				return;
			}
			startPosition = whoWeAreSection.offset().top;
			if($(this).scrollTop() > (startPosition - windowHeight)) {
				whoWeAreSection.find(".section-title").addClass("animated slideInLeft");
				whoWeAreSection.find(".who-we-are-holder").addClass("animated slideInLeft");
				whoWeAreSection.find(".skils-striped-wrap").addClass("animated slideInRight");
			};
		};
		setFirstAnimate();

		var setSecondAnimate= function(){
			if (!servivcesSection.length) {
				return;
			}
			startPosition = servivcesSection.offset().top;
			if($(this).scrollTop() > (startPosition - windowHeight)) {
				servivcesSection.find(".section-title").addClass("animated pulse");
				servivcesSection.find(".services-widget").addClass("animated bounceInUp");
			};
		}
		setSecondAnimate();

		var setThirdAnimate= function(){
			if (!whyChooseUsSection.length) {
				return;
			}
			startPosition = whyChooseUsSection.offset().top;
			if($(this).scrollTop() > (startPosition - windowHeight)) {
				whyChooseUsSection.find(".section-title").addClass("animated slideInLeft");
				whyChooseUsSection.find(".why-choose-us-nav li").addClass("animated slideInLeft");
			};
		}
		setThirdAnimate();

		var setFourthAnimate= function(){
			if (!priceTableSection.length) {
				return;
			}
			startPosition = priceTableSection.offset().top;
			if($(this).scrollTop() > (startPosition - windowHeight)) {
				priceTableSection.find(".section-title").addClass("animated slideInLeft");
				priceTableSection.find(".panel-price").addClass("animated flipInY");
			};
		}
		setFourthAnimate();

		var setTimelineAnimate = function(){
			if (!timlineAnimateSection.length) {
				return;
			}
			startPosition = timlineAnimateSection.offset().top;
			if($(this).scrollTop() > (startPosition - windowHeight)) {
				timlineAnimateSection.find(".section-title").addClass("animated slideInLeft");
				timlineAnimateSection.find(".timeline li").addClass("animated slideInLeft");
				timlineAnimateSection.find(".timeline li.timeline-inverted").addClass("animated slideInRight");
			};
		}
		setTimelineAnimate();
	}	


	var initialize = function(){

		$(document).on("ready", function(){

			windowHeight = $(window).height();

			$(window).on("scroll",function(){
				animateSections();

			});
				

		});

	};
	initialize();

})(jQuery);


(function($){
	var owl = $("#owl-related-products");
	if (!owl.length) {
			return;
	}
    owl.owlCarousel({

        // Define custom and unlimited items depending from the width
        // If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled
        // For better preview, order the arrays by screen size, but it's not mandatory
        // Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available.
        // In the example there is dimension with 0 with which cover screens between 0 and 450px
        
    itemsCustom : [
      [0, 1],
      [450, 2],
      [600, 4],
      [700, 4],
      [1000, 6],
      [1200, 6],
      [1400, 6],
      [1600, 6]
    ],
    navigation : true,
    navigationText: false

      });

})(jQuery);

(function($){

	$(document).on("ready", function(){
			$(".gallery-widget-links-camera").fancybox();
		})
})(jQuery);