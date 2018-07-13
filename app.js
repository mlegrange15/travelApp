// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

var videoInfo = [];

var chosenVideos = [];


tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  
    player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: videoInfo[j],
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}






$("#button").on("click", function(event) {
    event.preventDefault();

    var searchTerm = $("#searchInput").val().trim();

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchTerm + "&type=video&videoCaption=closedCaption&key=AIzaSyDkyhWrY5vrU3x1xIKmzlyjaKX3mBGKTJ8";

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {

        var videoResults = response.items[0].id.videoId;

        videoInfo = videoResults

        console.log(response);

        console.log(videoResults);

        });

    });