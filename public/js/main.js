$(".nowplayingdiv").click(function() {
    var nowActive = $(".active");
    nowActive.removeClass("active");
    nowActive.addClass("inactive"); 
    $(".nowplayingpage").removeClass("inactive");
    $(".nowplayingpage").addClass("active");
});
$(".upcomingdiv").click(function() {
    var nowActive = $(".active");
    nowActive.removeClass("active");
    nowActive.addClass("inactive"); 
    $(".upcomingpage").removeClass("inactive");
    $(".upcomingpage").addClass("active");
});
$(".theaterdiv").click(function() {
    var nowActive = $(".active");
    nowActive.removeClass("active");
    nowActive.addClass("inactive"); 
    $(".theaterpage").removeClass("inactive");
    $(".theaterpage").addClass("active");
});
$(".reservationdiv").click(function() {
    var nowActive = $(".active");
    nowActive.removeClass("active");
    nowActive.addClass("inactive"); 
    $(".reservationpage").removeClass("inactive");
    $(".reservationpage").addClass("active");
});
$(".homeicondiv").click(function() {
    var nowActive = $(".active");
    nowActive.removeClass("active");
    nowActive.addClass("inactive"); 
    $(".mainpage").removeClass("inactive");
    $(".mainpage").addClass("active");
});
$(".bookbtn").click(function(){
   var nowActive = $(".active");
    nowActive.removeClass("active");
    nowActive.addClass("inactive"); 
    $(".reservationpage").removeClass("inactive");
    $(".reservationpage").addClass("active");
});
$(".login").click(function() {
    alert("login");
});
$(".ownerdiv").click(function(){
    var nowActive = $(".active");
    nowActive.removeClass("active");
    nowActive.addClass("inactive"); 
    $(".ownerpage").removeClass("inactive");
    $(".ownerpage").addClass("active");
});

$(".nowshowingbtn").click(function() {
    var me = $(this);
    var other = $(".comingsoonbtn");
    other.removeClass("clicked");
    other.addClass("unclicked");
    me.removeClass("unclicked");
    me.addClass("clicked");
});

$(".comingsoonbtn").click(function() {
    var me = $(this);
    var other = $(".nowshowingbtn");
    other.removeClass("clicked");
    other.addClass("unclicked");
    me.removeClass("unclicked");
    me.addClass("clicked");
});
$(".finished").click(function() {
    var nowActive = $(".active");
    nowActive.removeClass("active");
    nowActive.addClass("inactive"); 
    $(".mypagediv").removeClass("inactive");
    $(".mypagediv").addClass("active");
});

function onYouTubeIframeAPIReady() {
                var player;
                player = new YT.Player('heroVideoTvScreen', {
                    //video id and playlist id will come from Episerver Youtube field
                    videoId: '82MwB4vRWK4', //UBqAJJRMerM - venue YouTube Video ID          // Player height (in px)
                    playerVars: {
                        autoplay: 1,        // Auto-play the video on load
                        controls: 0,        // Hide buttons in player
                        showinfo: 0,        // Hide the video title
                        rel: 0,
                        modestbranding: 1,  // Hide the Youtube Logo
                        loop: 1,            // Run the video in a loop
                        fs: 0,              // Hide the full screen button 
                        iv_load_policy: 3,  // Hide the Video Annotations
                        autohide: 0,         // Hide video controls when playing
                        playlist: '82MwB4vRWK4' //Needs to match the video id if it is a single video.
                    },
                    suggestedQuality: 'highres',
                    events: {
                        onReady: function (e) {
                            e.target.mute();
                        }
                    }
                });
                document.getElementById('homeHeroController').addEventListener('click', function (e) {
                    (player.getPlayerState() === 1) ? player.pauseVideo() : player.playVideo();
                });
              }

