$(document).ready(function(){
	AOS.init();
});
$(window).on('load', function(){
	$('body').addClass('loaded');
	setTimeout(function(){
		$('.log-content').addClass('visible-elem');
	},1300);
});

