$(function() {

	$('.main-autoplay').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: true,
	  dots: false,
	});

	$('.logo').addClass('animated zoomIn');
	$('.toggle-menu').hover(function(){
		$(this).addClass('animated swing');
	});
});