$(document).ready(function(){


// Global Variables

// Set interval counter
var j = 0;

//My attributes array
var attributes = ["Passionate", "Skilled", "Logical", "Responsible"
, "Honest ", "Reliable", "Attentive", "Adaptive", "Persistent"
, "Hard Working", "a Quick Learner", "Serene", "Patient", "Happy"
];

var education = "Varsity College <br>Diploma — 2007/2008 <br> 2 year Diploma in IT programming (Java)<br><br>Secondary Education Awards:<br><br>ABBOTT’S COLLEGE:<br>Annual award for Computer Studies Higher Grade<br><br>";
var education2 = "BOSMANSDAM HIGH SCHOOL: <br>Student Monitor <br>Grade 9 and 10 top achievers award in Mathematics <br>Member of the debate society <br>Member of chess society<br><br>";
var education3 = "BOSMANSDAM PRIMARY SCHOOL: <br>Monitor – Duty was to lead the computer monitor group Responsible for upgrading of schools computers for student’s use";

var contactInfo = " Email: Stevenjackson.sanguine@gmail.com </br></br>  Contact number: 0769975180</br></br> Skype: Steven.jackson..";



// Global Variables End 



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
 
// Additional information

// Remove animated class
function removeClass (){
    setTimeout(function () { 
    $('.content').removeClass('animated bounceInLeft');
    $('.content').removeClass('animated slideInRight');
}, 800);

}


//On Education click add animated class and information
$('#education-toggle').click(function(){

$('.content').html(education + education2 + education3);
$('.content').addClass('animated bounceInLeft', removeClass());

removeClass();

});


//On contact click add animated class and information
$('#contact-toggle').click(function(){
$('.content').html(contactInfo);
$('.content').addClass('animated slideInRight');

removeClass();

});




}); // End Document ready