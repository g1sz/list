
$( document ).ready(function() {
	$('.slider-main').slick({
		arrows:true,
		dots:true,
		autoplay: true
	});


	/* modal */
	$('.header-call').on('click', function(event) {
		event.preventDefault();
		$(".popup1").fadeIn(300);
	});

	$('.modal').on('click', function(event) {
		event.preventDefault();
		$(".popup1").fadeOut(300);
	});

		$('.pre_toform').on("touchend, click", function (e) {
         		e.preventDefault();
         		 $('body,html').animate({scrollTop: $('#order_form,.scrollform').offset().top}, 400);
         	});

     $('.pre_toform').on("click", function() {
      $("html, body").animate({
        scrollTop: $('.last-form:visible').offset().top
      }, 600);
     });
});








