function lazyLoad() {
	var obj = $('.lazy');

	if (obj.length) {
		obj.Lazy({
			scrollDirection: 'vertical',
			effect: 'fadeIn',
			visibleOnly: true
		});
	}
}

function animateScroll() {
	AOS.init({
		duration: 600,
		disable: 'mobile'
	});
}

function sliderPrimary() {
	var slider = $('.slider-primary__slider'),
		sliderArrows = $('.slider-primary__arrows');

	if (slider.length) {
		slider.slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			appendArrows: sliderArrows,
			prevArrow: '<a href="" class="slider-primary__prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></svg></a>',
			nextArrow: '<a href="" class="slider-primary__next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></svg></a>',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						centerMode: true,
						centerPadding: '80px',
					}
				}
			]
		})
	}
}

function sliderDefault() {
	var slider = $('.slider-default__slider'),
		sliderNav = $('.slider-default__nav');

	if (slider.length) {
		slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			fade: true,
			swipe: false,
			accessibility: false,
			draggable: false,
			touchMove: false,
			asNavFor: sliderNav,
		});
		sliderNav.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: slider,
			arrows: false,
			dots: false,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						centerMode: true,
						centerPadding: '100px',
						dots: true,
						customPaging: function(slider, i) {
							return $('<span class="slider-dot"></span>');
						},
					}
				},
			]
		});

		sliderNav.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.media-item__preview').fadeIn(200);
			$('.media-item__iframe').attr('src','');
		});
	}
}

function progress() {
	$.ajax({
		type: "GET",
		url: '/include/data-usd.php',
		success: function(data){
			var progressLine = $('.module-progress__line'),
				progressNumberData = Math.ceil(data);
				progressNumberTotal = $('.module-progress__hard').data('total'),
				progressPercent = (Math.ceil(progressNumberData) / progressNumberTotal) * 100;
				label = $('.module-progress__tooltip');
			label.css({'left':progressPercent+'%'});
			progressLine.show();
			progressLine.css({'width':progressPercent+'%'});
		}
	});

	$.ajax({
		type: "GET",
		url: '/include/data-eth.php',
		success: function(data){
			var label = $('.label-eth'),
				labelData = Math.ceil(data),
				labelRoot = $('.module-progress__tooltip');
			label.text(labelData);
			labelRoot.show();
		}
	});

}


function changeColorHeader() {
	var header = $('.layout-header');

	function detectScrollHeader() {
		if($(window).scrollTop() > 10) {
			header.addClass("layout-header_color");
		} else {
			header.removeClass("layout-header_color");
		}
	}

	detectScrollHeader();

	$(window).on("scroll", function() {
		detectScrollHeader();
	});
}

function playVideo() {
	var link = $('.js_video-play');

	link.on('click', function() {
		var url = $(this).attr('href'),
			player = $(this).closest('.media-item').find('.media-item__iframe');

		$(this).closest('.media-item__preview').fadeOut(600);
		player.attr('src', url);


		return false;
	});
}

function scrollAnchor() {
	var link = $('a');

	link.on('click', function(e) {
		var anchor = $(this).data('target');

		if (anchor != undefined) {

			if ($(".menu-main").css("display") == "none") {
				sidebarClose();
				$('body, html').animate({
					"scrollTop": $(anchor).offset().top - 60
				}, 600 );
			} else {
				$('body, html').animate({
					"scrollTop": $(anchor).offset().top - 70
				}, 600 );
			}

			window.location.hash = anchor;

			return false;
		}
	});
}

function sliderICO() {
	var slider = $('.ico-graph');

	if (slider.length) {
		slider.slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			swipe: false,
			accessibility: false,
			draggable: false,
			touchMove: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
						centerMode: true,
						centerPadding: '100px',
						touchMove: true,
						swipe: true,
						dots: true,
						customPaging: function(slider, i) {
							return $('<span class="slider-dot"></span>');
						},
					}
				},
				{
					breakpoint: 479,
					settings: {
						slidesToShow: 1,
						centerMode: true,
						centerPadding: '100px',
						touchMove: true,
						swipe: true,
						dots: true,
						customPaging: function(slider, i) {
							return $('<span class="slider-dot"></span>');
						},
					}
				},
			]
		});
	}
}

function sidebarClose() {
	$('.js_burger').removeClass('burger_open');
	$('body').removeClass('open-sidebar');
}

function burgerMenu() {
	var burgerLink = $('.js_burger'),
		burgerClose = $('.js_close-sidebar');

	burgerLink.on('click', function() {
		var item = $(this);

		if (item.hasClass('burger_open')) {
			$('body').removeClass('open-sidebar');
			item.removeClass('burger_open');
		} else {
			$('body').addClass('open-sidebar');
			item.addClass('burger_open');

			$(".layout-sidebar__scroll").scrollTop(0);
		}

		return false;

	});

	burgerClose.on('click', function() {
		sidebarClose();
		return false;
	});

	$(document).on('click', function(e) {
		if (!($(e.target).closest('.burger').length) && !($(e.target).closest('.layout-sidebar').length)) {
			sidebarClose();
		}
	});
}

function scrollToHead() {
	var link = $('.js_scroll-top');

	link.on('click', function() {

		$('body, html').animate({
			"scrollTop": 0
		}, 1000 );

		return false;
	});
}

function animateCars() {
	var point1 = $('.move-point_1'),
		point2 = $('.move-point_2'),
		point3 = $('.move-point_3'),
		point4 = $('.move-point_4'),
		point5 = $('.move-point_5'),
		point6 = $('.move-point_6'),
		point7 = $('.move-point_7'),
		point8 = $('.move-point_8'),
		animateCar1 = new TimelineMax({repeat:-1}),
		animateCar2 = new TimelineMax({repeat:-1}),
		animateCar3 = new TimelineMax({repeat:-1}),
		animateCar4 = new TimelineMax({repeat:-1}),
		animateCar5 = new TimelineMax({repeat:-1}),
		animateCar6 = new TimelineMax({repeat:-1}),
		animateCar7 = new TimelineMax({repeat:-1}),
		animateCar8 = new TimelineMax({repeat:-1});

	animateCar1
		.to(point1, 3, {left:'71%', top:'82.5%', ease:Linear.easeNone})
		.to(point1, 0, {className:"+=position-1"})
		.to(point1, 3, {left:'51%', top:'66%', ease:Linear.easeNone})
		.to(point1, 0, {className:"+=position-2"})
		.to(point1, 3, {left:'32.5%', top:'82%', ease:Linear.easeNone})
		.to(point1, 0, {className:"+=position-3"})
		.to(point1, 3, {left:'52.5%', top:'98.2%', ease:Linear.easeNone});

	animateCar2
		.to(point2, 3, {left:'33.5%', top:'80.5%', ease:Linear.easeNone})
		.to(point2, 0, {className:"+=position-1"})
		.to(point2, 3, {left:'20.5%', top:'69%', ease:Linear.easeNone})
		.to(point2, 0, {className:"+=position-2"})
		.to(point2, 3, {left:'36.6%', top:'56%', ease:Linear.easeNone})
		.to(point2, 0, {className:"+=position-3"})
		.to(point2, 3, {left:'49.5%', top:'67.5%', ease:Linear.easeNone});

	animateCar3
		.to(point3, 4, {left:'50.5%', top:'68%', ease:Linear.easeNone})
		.to(point3, 0, {className:"+=position-1"})
		.to(point3, 3, {left:'68.5%', top:'82%', ease:Linear.easeNone})
		.to(point3, 0, {className:"+=position-2"})
		.to(point3, 3, {left:'52.5%', top:'95%', ease:Linear.easeNone})
		.to(point3, 0, {className:"+=position-3"})
		.to(point3, 3, {left:'35%', top:'80.5%', ease:Linear.easeNone});

	animateCar4
		.to(point4, 3, {left:'49.5%', top:'67.5%', ease:Linear.easeNone})
		.to(point4, 0, {className:"+=position-1"})
		.to(point4, 3, {left:'33.5%', top:'80%', ease:Linear.easeNone})
		.to(point4, 0, {className:"+=position-2"})
		.to(point4, 3, {left:'20.5%', top:'69%', ease:Linear.easeNone})
		.to(point4, 0, {className:"+=position-3"})
		.to(point4, 3, {left:'36.5%', top:'56.5%', ease:Linear.easeNone});

	animateCar5
		.to(point5, 8, {left:'52.5%', top:'97.5%', ease:Linear.easeNone})
		.to(point5, 0, {className:"+=position-1"})
		.to(point5, 4, {left:'71.5%', top:'82%', ease:Linear.easeNone})
		.to(point5, 0, {className:"+=position-2"})
		.to(point5, 8, {left:'35.5%', top:'53%', ease:Linear.easeNone})
		.to(point5, 0, {className:"+=position-3"})
		.to(point5, 4, {left:'17%', top:'68.5%', ease:Linear.easeNone});

	animateCar6
		.to(point6, 3, {left:'34.5%', top:'54.5%', ease:Linear.easeNone})
		.to(point6, 0, {className:"+=position-1"})
		.to(point6, 7, {left:'70%', top:'83.5%', ease:Linear.easeNone})
		.to(point6, 0, {className:"+=position-2"})
		.to(point6, 3, {left:'94%', top:'64.5%', ease:Linear.easeNone})
		.to(point6, 0, {className:"+=position-3"})
		.to(point6, 3, {left:'58%', top:'36%', ease:Linear.easeNone});

	animateCar7
		.to(point7, 6, {left:'37%', top:'55%', ease:Linear.easeNone})
		.to(point7, 0, {className:"+=position-1"})
		.to(point7, 8, {left:'60.5%', top:'37.5%', ease:Linear.easeNone})
		.to(point7, 0, {className:"+=position-2"})
		.to(point7, 6, {left:'91.5%', top:'64.5%', ease:Linear.easeNone})
		.to(point7, 0, {className:"+=position-3"})
		.to(point7, 4, {left:'71%', top:'82.5%', ease:Linear.easeNone});

	animateCar8
		.to(point8, 6, {left:'70%', top:'81.5%', ease:Linear.easeNone})
		.to(point8, 0, {className:"+=position-1"})
		.to(point8, 8, {left:'37.5%', top:'55%', ease:Linear.easeNone})
		.to(point8, 0, {className:"+=position-2"})
		.to(point8, 6, {left:'58%', top:'39%', ease:Linear.easeNone})
		.to(point8, 0, {className:"+=position-3"})
		.to(point8, 4, {left:'91.5%', top:'63.5%', ease:Linear.easeNone});
}

function changeLanguages() {
	var dropdown = $('.dropdown'),
		dropdownLink = $('.dropdown__current');

	dropdownLink.on('click', function() {
		var item = $(this);

		if (item.hasClass('open')) {
			item.removeClass('open');
			dropdown.removeClass('dropdown_open');
		} else {
			item.addClass('open');
			dropdown.addClass('dropdown_open');
		}

		return false;
	});
}

function smoothingScroll() {
	if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
		$('body').on("mousewheel", function () {
			// remove default behavior
			event.preventDefault();

			//scroll without smoothing
			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			window.scrollTo(0, currentScrollPosition - wheelDelta);
		});
	}
}

function hashNav() {
	var hash = window.location.hash;

	if (hash && $(".menu-main").css("display") == "none") {
		$('body, html').animate({
			"scrollTop": $(hash).offset().top - 60
		}, 1000 );
	} else if (hash && $(".menu-main").css("display") == "block") {
		$('body, html').animate({
			"scrollTop": $(hash).offset().top - 70
		}, 1000 );
	}
}

$(document).ready(function() {
	lazyLoad();
	animateScroll();
	sliderPrimary();
	sliderDefault();
	sliderICO();
	changeColorHeader();
	playVideo();
	scrollAnchor();
	burgerMenu();
	scrollToHead();
	changeLanguages();
	animateCars();
	//progress();
	smoothingScroll();
	hashNav();
});
