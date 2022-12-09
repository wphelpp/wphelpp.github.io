$(document).ready (function () {

	//$("nav ul li").children("ul").parent("li").children("a").addClass("plus_icon");

	var windowWidth = $(window).width();
	if (windowWidth > 576) {

		$("nav ul li").hover (function () {			
			//$(this).children("ul").css("display", "block");
			$(this).children("ul").animate({
			opacity: 1,
			top: "48",
			}, 125, function() {
			//Animation complete
			});
			return false;

		}, function () {			
			$(this).children("ul").animate({
			opacity: 0,
			top: "100"
			}, 125, function() {
			//Animation complete
			});
		});

		$("nav ul ul li").hover (function () {			
			$(this).children("ul").css("display", "block");
			$(this).children("ul").animate({
			opacity: 1,
			top: "0"
			}, 125, function() {
			//Animation complete
			});
			return false;

		}, function () {			
			$(this).children("ul").animate({
			opacity: 0,
			top: "100"
			});
		});

	}

	else if (windowWidth < 576) {

		$("nav ul li").click (function () {
			$(this).children("ul").slideToggle("fast");
			return false;
		});
		
	}

	$(".nav_toggle").on("click", function() {
    	$("nav > ul").slideToggle();
    	return false;
	});

	$(".plusminus").text('+');
	$(".accordion_head").click(function () {

		if ($('.accordion_body').is(':visible')) {
			$(".accordion_body").slideUp(300);
			$(".plusminus").text('+');
		}

		if ($(this).next(".accordion_body").is(':visible')) {
			$(this).next(".accordion_body").slideUp(300);
			$(this).children(".plusminus").text('+');
		} 

		else {
			$(this).next(".accordion_body").slideDown(300);
			$(this).children(".plusminus").text('-');
		}
	});

});