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



/**************************************************************************

EVEMT LISTENER - SKILLS MATRIX

**************************************************************************/ 


$('li').on('click', function(event) {

// Variable Declaration and assignment
var parentElementID = $(this).parent().attr("id");
var elementDataValue = $(this).data("trigger");

// Strip # from ID
parentElementID = parentElementID.replace("#","");


// Remove Active Class Function
removeActiveClass()

// Add Active Class to Trigger Element
$(this).addClass('active');

// Pass Trigger Values to transition function
experienceImageTransition(parentElementID, elementDataValue)

});

// Remove Active Class Function
function removeActiveClass(){
	
// Find and Remove previous Active class from elements
$('.experience-sidebar').find('li.active').removeClass('active')
$('.skills-image-block').find('div.active').removeClass('active').hide();
}


// Trigger function
function experienceImageTransition(parentID, elementDataValue) {

// Element targeted based on the Trigger data- atrribute and Parent Elements ID
$('.'+ parentID + "-" + elementDataValue +'').fadeIn('300', function() {}).addClass('active');


}

/**************************************************************************

END EVEMT LISTENER - SKILLS MATRIX

**************************************************************************/ 




}); //Document Ready
