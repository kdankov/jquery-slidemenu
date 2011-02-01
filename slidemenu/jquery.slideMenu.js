(function($) {
    $.fn.extend({
        slideMenu: function() {
			return this.each(function(){
				
				$(this).wrap('<div class="slide_menu_wrapper" />');
				$(this).parent('.slide_menu_wrapper').wrap('<div class="slide_menu"><div class="slide_menu_inner"></div></div>');

				var $slideMenu = $(this).parent().parent().parent().filter(".slide_menu");
				var ulwidth = $slideMenu.width();
				var page = 1;
				var speed = 300;
				
				$slideMenu.find("ul").parent().filter("li").addClass("parent").children('a').wrap('<span class="holder" />').parent('.holder').append('<span class="next">Next</span>').end().end().find('ul').prepend('<li class="li_header"><span class="holder"><span class="back">Back</span><span class="title"></span></span></li>');
				
				$slideMenu.find("span.title").each(function()
				{
					$(this).text( $(this).parent().parent().parent().parent().find('> span > a').text() );
				});

				$slideMenu.find("li span.back, li span.next").click(function(){

					$objli = $(this).parent().parent();
					
					if ( $(this).hasClass('next') )
					{
						$objli.addClass("active");

						$slideMenu.find('.slide_menu_wrapper')
							.animate({ left: -ulwidth * page,  }, speed,
							function()
							{
								page = page + 1;
							}
						);						
					}
					else
					{
						page = page - 1;

						$slideMenu.find('.slide_menu_wrapper')
							.animate({ left: -ulwidth*(page-1) }, speed,
								function(){
									$objli.parent().parent().removeClass("active");
								}
							);

						if ( page == 1 )
						{
							$slideMenu.find('.slide_menu_wrapper').animate({ left: 1, marginLeft: -1 }, 10);
						}

					}
					
				});
											
			});
			
        }

    });
})(jQuery);

