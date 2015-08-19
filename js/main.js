$(function(){



// Add event listener "More about me" CTA
$('a[data-about-me="more"]').on("click", function(){
	$('.more-about-me').slideToggle('400', function() {


$('a[data-about-me="more"]').text("Less about me? Are you sure?");;





	});


});



})
