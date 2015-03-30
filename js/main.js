$(function() {
	$(window).resize(function() {
		var _width = $(".view").css("width"); 
		$(".view").css("height",_width);
	});

	$(window).ready(function() {
		var _width = $(".view").css("width"); 
		$(".view").css("height",_width);
	});
});
