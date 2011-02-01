$(function(){
	
	WebFontConfig = {
		google: { 
			families: [ 'Lobster', 'PT Sans' ] 
		}
	}

	function wf_load()
	{
		var wf = document.createElement('script');
		
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		
		var s = document.getElementsByTagName('script')[0];
		
		s.parentNode.insertBefore(wf, s);
		
	}
	
	wf_load();
	
		
	$(".nav").slideMenu();
	
	// $("#nav").fadeMenu();
	
	//$("#nav").hide();
	
});