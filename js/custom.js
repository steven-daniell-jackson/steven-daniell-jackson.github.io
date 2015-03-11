$(document).ready(function(){


// Global Variables

// Set interval counter
var j = 0;

//My attributes array
var attributes = ["Passionate", "Skilled", "Logical", "Responsible"
, "Honest ", "Reliable", "Attentive", "Adaptive", "Persistent"
, "Hard Working", "a Quick Learner", "Serene", "Patient", "Happy"
];

// Global Variables end 



// Side bar
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    });// Side bar end



// Animate scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 600);
                return false;
            }
        }
    });
    });// Animate scroll end




function textScroll(i) {  //Start textScroll()
    document.getElementById("rotate").innerHTML = attributes[i];

} //End textScroll()


function setInterval (){ // Start setInterval ()
window.setInterval(function() {   // Interval



if (j == attributes.length) {// If counter is equal to array length
j = 0;// Reset counter
}

else if (j < attributes.length) {// If counter is less than array length. Run textScroll() and change innerHTML
    textScroll(j);// Increment Global counter
    j= j+1;
}

else { // Conditional to throw error
    alert("There was a error running this script");
}


}, 1000);// End Interval 


}// End setInterval ()


setInterval ();
// Run function
// End Scrolling text


// Experience with

// Page scroll with Jquery events
$(window).scroll(function(event) {
 var y = $(this).scrollTop();


if (y >=700) { // Scroll position


window.setTimeout(function() { //Timeout set for animate scroll
 
//Jquery box

$('.box#jq').animate({
    opacity: "1",
    left: "0px"},
    1000, function() {

    });

//CSS box
$('.box#css').animate({
    opacity: "1",
    top: "0px"},
    1000, function() {
        /* stuff to do after animation is complete */
    });

//Javascript box
$('.box#js').animate({
    opacity: "1",
    bottom: "0px"},
    1000, function() {
        /* stuff to do after animation is complete */
    });


//PHP box
$('.box#php').animate({
    opacity: "1",
    right: "0px"},
    1000, function() {

    });




}, 1000); //End Timeout
} //End if
else if (y >600  && y <1000){
$('#mysql').addClass(' animated bounceInLeft');
$('#bootstrap').addClass(' animated lightSpeedIn');
$('#wordpress').addClass(' animated rollIn');
$('#more').addClass(' animated slideInRight');

} // End else if


});
// End Page scroll with Jquery events 











});