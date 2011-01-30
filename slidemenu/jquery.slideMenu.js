(function($) {
    $.fn.extend({
        slideMenu: function() {
			return this.each(function(){
				
				$(this).wrap('<div class="slide_menu"><div class="slide_menu_wrapper"></div></div>');

				var $slideMenu = $(".slide_menu");
				var ulwidth = $slideMenu.width();
				var page = 1;
				var speed = 300;
				
				$slideMenu.find("ul").parent().filter("li").addClass("parent").find('ul').append('<li><span class="back">Back</span></li>');

				$slideMenu.find("li span").click(function(){
	
					$objli = $(this).parent();
					
					if ( !$(this).hasClass('back') )
					{
						if ( $objli.find("ul").size() > 0 )
						{
							$objli.addClass("active");
							
							$slideMenu.children('.slide_menu_wrapper')
								.animate({ left: -ulwidth * page,  }, speed,
								function()
								{
									page = page + 1;
								}
							);
						}
					}
					else
					{
						page = page - 1;

						$slideMenu.children('.slide_menu_wrapper')
							.animate({ left: -ulwidth*(page-1) }, speed,
								function(){
									$objli.parent().parent().removeClass("active");
								}
							);

						if ( page == 1 )
						{
							$slideMenu.children('.slide_menu_wrapper').animate({ left: 1, marginLeft: -1 }, 10);
						}

					}
					
				});
											
			});
			
        }

    });
})(jQuery);

