//Slick slider

  $('.gallery').slick({
  	prevArrow: '<button type="button" class="slick-prev"></button>',
  	nextArrow: '<button type="button" class="slick-next"></button>'
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