$(document).ready(
		function() {
		$.mobile.loading('show');
		$.mobile.loading('hide');
		$(document).bind("mobileinit", function(){
		$.mobile.touchOverflowEnabled = true;
		});							
		});