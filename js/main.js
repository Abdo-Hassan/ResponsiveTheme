/*
-$(window).load(function () { = Deprecated
-window.onload = function (){ = Works only for 1 reload
-window.on("load",function(){}) = Works only for 1 reload
-<body onload="myFunction()"> = Works Fine
*/

function loading(){
	$('.loading_overlay').fadeOut(2000);
}

//start jQuery
$(function(){

	//nice scroll
		$("body").niceScroll({
			cursorcolor: "#e41b17",
			cursorborder:"1px solid #e41b17",
	    cursorwidth: "5px",
		});

	//wow js
		new WOW().init();

	//scroll to top
		var scroll_top = $('#scroll_top');

		$(window).scroll(function(){

			$(this).scrollTop() >= 700 ? scroll_top.show() : 	scroll_top.hide();

		});

			//click on button to scroll top
			scroll_top.click(function() {
				$("html,body").animate({scrollTop:0},600);
			});

	//bootstrap carousel
		$('.carousel').carousel({
			interval:6000
		});

	//show toolbox
		$('.gear-check').click(function() {

			$('.color-option').fadeToggle();
			
		});

	//change theme color on click
		var colorLi = $('.color-option ul li');

		colorLi
		.eq(0).css("backgroundColor","#e41b17").end()
		.eq(1).css("backgroundColor","#009AFF").end()
		.eq(2).css("backgroundColor","#ee21c3").end()
		.eq(3).css("backgroundColor","#FFD500");

		colorLi.click(function() {

			$("link[href*='theme']").attr("href",$(this).attr('data-value'));

		});

});