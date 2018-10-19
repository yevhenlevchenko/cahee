'use strict';

(function(){
		//burger menu
		$('.burger-trigger, .menu').click(function(){
			$('.menu').toggleClass('menu-opened');
		});

		$(document).click(function(event){
			if ($(event.target).closest(".burger-trigger").length ) return;
			$('.menu').removeClass('menu-opened');
			event.stopPropagation();
		});

//backToTop

$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 50){
		$(".btn-top").fadeIn();
	}else{
		$(".btn-top").fadeOut();
	}
});

$(".btn-top").on("click", function(){
	$("html, body").animate({scrollTop:0}, 900)
});

//slowScroll

$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
	var target = $(this).attr('href'),
		bl_top = $(target).offset().top;
	$('body, html').animate({scrollTop: bl_top}, 900);
	return false;
});


})(jQuery);

