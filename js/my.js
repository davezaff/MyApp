$(document).ready(
				function() {
		$.mobile.loading('show',{
		text: 'loading page..',
	textVisible: true,
	theme: 'z',
	html: ""
});
	window.onload = function(){
		$('#sbar').focus();
		$('.mySearchInput').textinput();	 
	
		$.mobile.loading("hide");
	};		
			 
});
		
		

		