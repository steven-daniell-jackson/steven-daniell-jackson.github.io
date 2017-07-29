$(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            // console.log($('.item.active'));
                 var id = $('#myCarousel .item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});

// Smooth Scroll
$(document).on('click', 'a', function(event, BODY_WIDTH){
    // event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top + (BODY_WIDTH > 1120 ? 0 : -100)
    }, 500);
});

function tabChange(e) {

var dataAttrValue = e.getAttribute('data-tabs');

$("p.tabs.active").removeClass('active ').hide();
$("p." + dataAttrValue).addClass('active').show();

}



$('section.container.profile-links .panel .panel-body').on('click', function(event) {
        var elementDataValue = $(this).data("trigger");
        var linkedin = 'My <a href="https://za.linkedin.com/pub/steven-jackson/b3/978/199" target="_blank">Linkedin</a> Profile';
        var github = 'My <a href="https://github.com/steven-daniell-jackson/" target="_blank">Github</a> Profile';
        var googleDocs = 'Google Drive Document containing Work Done, Portfolio of Websites worked on, Skills Matrix and Responsibilies. <br>';
        var googleDocsLink = '<a href="https://docs.google.com/spreadsheets/d/1s7Or_0nZ1YYS3KibGAVgGdPnjmqB6iYWQPnXvEVpUmw/edit?usp=sharing" target="_blank">View Google Drive Document - No Longer Maintained</a>'
        var portfolioContent = 'View my Screenshot Portfolio<br> <a href=http://steven-daniell-jackson.github.io/portfolio/" target="_blank">View Screenshot Portfolio - Outdated</a>';
        $('div.profile-link-information').css("opacity", "1");
        switch (elementDataValue) {
            case "porfolio":
                $('div.profile-link-information').html(portfolioContent).fadeIn('slow', function() {});
                break;
            case "linkedin":
                $('div.profile-link-information').html(linkedin).fadeIn('slow', function() {});
                break;
            case "google-docs":
                $('div.profile-link-information').html(googleDocs + googleDocsLink).fadeIn('slow', function() {});
                break;
            case "github":
                $('div.profile-link-information').html(github).fadeIn('slow', function() {});
                break;
        }
    });