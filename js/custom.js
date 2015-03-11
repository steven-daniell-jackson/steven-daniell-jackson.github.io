$(document).ready(function(){


// Global Variables

// Set interval counter
var j = 0;

//My attributes array
var attributes = ["Passionate", "Skilled", "Dedicated"];

// Global Variables end 



// Side bar
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
 
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

// Animate scroll
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
   


  
  
 //Scrolling text
function textScroll(i) {
    
        document.getElementById("rotate").innerHTML = attributes[i];
        console.log(attributes[i]);    
}




function setInterval (){

// Interval
window.setInterval(function() {  

// If counter is equal to array length
// Reset counter
if (j == attributes.length) {
j = 0;
}

// If counter is less than array length. Run textScroll() and change innerHTML
// Increment Global counter

else if (j < attributes.length) {
    textScroll(j);
    j= j+1;

}
//
else {
    alert("There was a error running this script");
}

// End Interval 
}, 2000);
 

}// End setInterval ()

// Run function
setInterval ();






});