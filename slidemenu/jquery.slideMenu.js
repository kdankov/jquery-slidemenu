(function($) {
    $.fn.extend({
        slideMenu: function() {
			return this.each(function(){
				
				// Add some divs that are used to hold the list and animate
				$(this).wrap('<div class="slide_menu"><div class="slide_menu_inner"><div class="slide_menu_wrapper"></div></div></div>');
				
				// Get refference to the slideMenu holder div
				var $slideMenu = $(this).parent().parent().parent().filter(".slide_menu");
				var $slideMenuWrapper = $slideMenu.find('.slide_menu_wrapper');
				
				// Get the width of the menu from CSS.
				var ulwidth = $slideMenu.width();
				var page = 1;
				var speed = 300;
				var link_height = 41;
				var link_spacing = 10;
				var sections = $slideMenuWrapper.children("ul").children("li").size();
				
				// This is a bit complicated!
				// Find all the li elements that have uls inside and set class "active". Then find the children links of this li elements and wrap them with a span with class 'holder' after witch insert another span with class "next" in the "holder" span. Go back to the li element and find ul ekements and insert a li header element in the beginning.
				$slideMenu.find("ul").parent().filter("li").addClass("parent").children('a').wrap('<span class="holder" />').parent('.holder').append('<span class="next">Next</span>').end().end().find('ul').prepend('<li class="li_header"><span class="holder"><span class="back">Back</span><span class="title"></span></span></li>');
				
				// Get all the title span elements and populate them with the text of the a that is the parent ot the current ul
				$slideMenu.find("span.title").each(function()
				{
					$(this).text( $(this).parent().parent().parent().parent().find('> span > a').text() );
				});

				$slideMenuWrapper.css("height", ((link_height + link_spacing) * sections) + link_spacing);
				
				
				// Let the magic begin. Attaching click event on the spans with class "next" or "back"
				$slideMenu.find("li span.back, li span.next").click(function(){

					// Creatong a reference to the parent li
					$objli = $(this).parent().parent();
					
					if ( $(this).hasClass('next') )
					{
						
						// Add class active to the parent li so that the UL inside will be visible
						$objli.addClass("active");
						
						// How many li elements does the next Ul have?
						sections = $objli.children("ul").children("li").size();
						
						// Get the slide_menu_wrapper div and prepare to animate the movement.
						$slideMenuWrapper.animate({ left: -ulwidth * page, height: ((link_height + link_spacing) * sections) + link_spacing }, speed,
							function()
							{
								// After animation is over update the page variable
								page = page + 1;
							}
						);						
					}
					else
					{
						// First we update the page variable
						page = page - 1;
						
						// How many li elements does the previous Ul have?
						sections = $objli.parent().parent().parent().children("li").size();

						$slideMenuWrapper.animate({ left: -ulwidth * (page-1), height: ((link_height + link_spacing) * sections) + link_spacing }, speed,
							function()
							{
								$objli.parent().parent().removeClass("active");
							}
						);
					}
					
				});
											
			});
        }
    });
})(jQuery);

