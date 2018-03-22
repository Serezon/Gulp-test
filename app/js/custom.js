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

//Video

$('.video__preview').click(function() {
	$(this).css('display','none');
});

$('.button').click(function() {
	$('.video__preview').css('display','block');
});


// Плавный скролл по якорям
$("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });