$(document).ready(function(){
	
	// Main menu slider
	var curButtonSelected = 0;
	var animationSpeed = 500; 
	$slider = $("#nav-menu .pointer");
	$("#nav-menu .nav-buttons div").on("mouseenter", function(){
		var offsetMultiplier = $(this).attr("data-num");
		$slider.stop(true,false).animate({
			"left" : (113+offsetMultiplier*145)+"px"
		},animationSpeed);
	});
	
	$("#nav-menu .nav-buttons").on("mouseleave", function(){
		$slider.stop(true,false).animate({
			"left" : (113+curButtonSelected*145)+"px"
		},animationSpeed);
	});
	
	
	
});
