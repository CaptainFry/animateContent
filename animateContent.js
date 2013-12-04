/*
        animateContent - The jQuery plugin for animate
		your content inside your page
        by Etienne Pichereau 
        
        Dual licensed under MIT and GPL.
*/





(function($) {

	 $.animateContent = function(options) {
					var animateContent = this,
					 requestAnimFrame = window.requestAnimationFrame ||
										window.webkitRequestAnimationFrame ||
										window.mozRequestAnimationFrame ||
										window.oRequestAnimationFrame ||
										window.msRequestAnimationFrame ||
										function( callback ){
												window.setTimeout(callback, 1000 / 60);
										}