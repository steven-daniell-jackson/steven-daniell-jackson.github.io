var sanguinezorChannelID = 'UCV_SnC6EM4XvAm5LpRogqxg';
var epicOverwatchChannelID = 'UCiBCIYVgf8YS-BAj2qp1WdA';
var apiKey = 'AIzaSyDZDOONY1OsKtJ2Pe_qiEYlCo9Qz2DemVg';
var youtubeWatchStart = '<iframe width="275" height="200" src="https://www.youtube.com/embed/';
var youtubeWatchEnd = '" frameborder="0" allowfullscreen></iframe>';
var videoAmount = 4;

$(document).ready(function($) {

    

// Sanguinezor Channel
$.get( "https://www.googleapis.com/youtube/v3/search?key="+apiKey+"&channelId="+sanguinezorChannelID+"&part=snippet,id&order=date&maxResults=" + videoAmount, function( data ) {

for (var i = 0; i < videoAmount; i++) {
    $( ".sanguinezorResults" ).append("<div class='col-md-3'>"+youtubeWatchStart + data.items[i].id.videoId + youtubeWatchEnd + "</div>");
}
 
});

//  Overwatch Channel
$.get( "https://www.googleapis.com/youtube/v3/search?key="+apiKey+"&channelId="+epicOverwatchChannelID+"&part=snippet,id&order=date&maxResults=" + videoAmount, function( data ) {

for (var i = 0; i < videoAmount; i++) {
    $( ".epicOverwatchResults" ).append("<div class='col-md-3'>"+youtubeWatchStart + data.items[i].id.videoId + youtubeWatchEnd + "</div>");
}

 
});





});