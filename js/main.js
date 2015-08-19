$(function(){

/**************************************************************************

EVEMT LISTENER - ABOUT ME 

**************************************************************************/ 

// Add event listener "More about me" 
$('a[data-about-me="more"]').on("click", function(){

	// Change Background color of arrow before Event
	$('div.container.arrow-about').css("background-color", "#292929");

	// Animate div down
	$('.more-about-me').slideDown('400', function() {
		$('a[data-about-me="more"]').css("opacity", "0");


	}); 
}); //End "More about me" Trigger


// Add event listener "Less about me" 
$('a[data-about-me="less"]').on("click", function(){

// Animate div up
$('.more-about-me').slideUp('400', function() {

	// Change Background color of arrow during Event
	$('div.container.arrow-about').css("background-color", "#fff");
	$('a[data-about-me="more"]').css("opacity", "1");
	

}); 
}); //End "Less about me" Trigger


/**************************************************************************

END EVEMT LISTENER - ABOUT ME 

**************************************************************************/ 


}); //Document Ready
