
// SCROLL EFFECT


$(function(){
	$('.squares a').bind('click', function (){
		var $anchor = $(this);
		$("html, body").stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	})
})




$(document).ready(function(){



    $("[rel='tooltip']").tooltip();

    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 



})
