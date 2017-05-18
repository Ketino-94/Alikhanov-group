$(function() {

	$('.main-autoplay').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: true,
	  dots: false,
	});


	function bodyStyle() {
		var x=1 
		return function() {
		return $("header").css('background-position', x++ +"px " + " 0px")
	}} 
	setInterval(bodyStyle(), 50);

	setTimeout(function(){
		$('.logo-style').css({ 
			"top":"100px", 
			"left": "0",
			"opacity": "0" });
		$('.logo').css({ 
			"opacity": "1" });
		
	}, 900)
});