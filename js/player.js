$(document).ready(function(e) {
	$("body").find('iframe').attr('src', '');
	
	$('#about-play').bind('touchstart click', function() {
			$(".about-video-wrapper").addClass("show");
			var videoId = 'Cau7jiqqtRc';
			
			$("#player").find('iframe').attr('src', 'https://www.youtube.com/embed/'+videoId+'?rel=0&amp;autoplay=1&hd=1');
	});
	
	$('div.customplayer').bind('touchstart click', function() {
			var videoId = $(this).data('vid');
			$(this).find('img').hide();
			$(this).find('i').hide();
			$(this).find('iframe').attr('src', 'https://www.youtube.com/embed/'+videoId+'?rel=0&amp;autoplay=1&hd=1');
	});
	
	$(".about-video-wrapper .btn-close").bind('touchstart click', function() {
			$(".about-video-wrapper").removeClass("show");
			$("#player").find('iframe').attr('src', '');
	});
});