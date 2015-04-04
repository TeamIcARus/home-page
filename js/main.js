$(function() {
	$(window).resize(function() {
		var _width = $(".view").css("width"); 
		$(".view").css("height",_width);
	});

	$(window).ready(function() {
		var _width = $(".view").css("width"); 
		$(".view").css("height",_width);
	});
	var linkTouchStart = function(){
    thisAnchor = $(this);
    touchPos = thisAnchor.offset().top;
    moveCheck = function(){
        nowPos = thisAnchor.offset().top;
        if(touchPos == nowPos){
            thisAnchor.addClass("hover");
        }
    }
    setTimeout(moveCheck,100);
}
var linkTouchEnd = function(){
    thisAnchor = $(this);
    hoverRemove = function(){
        thisAnchor.removeClass("hover");
    }
    setTimeout(hoverRemove,500);
}
 
$(document).on('touchstart mousedown','.view-first',linkTouchStart);
$(document).on('touchend mouseup','.view-first',linkTouchEnd);




});
