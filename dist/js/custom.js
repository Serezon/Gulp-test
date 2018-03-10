// Gallery initialization
jQuery(document).ready(function($) {
			$('.gallery').unslider();
		});
   
// Gallery config
$('.gallery').unslider({
	nav: false,
	arrows: {
		prev: '<a class="unslider-arrow prev"></a>',
		next: '<a class="unslider-arrow next"></a>'
	}
});

