$(".nowplayingdiv").click(function() {
    var nowActive = $(".pageactive");
    nowActive.removeClass("pageactive");
    nowActive.addClass("pageinactive"); 
    $(".nowplayingpage").removeClass("pageinactive");
    $(".nowplayingpage").addClass("pageactive");
});
$(".upcomingdiv").click(function() {
    var nowActive = $(".pageactive");
    nowActive.removeClass("pageactive");
    nowActive.addClass("pageinactive"); 
    $(".upcomingpage").removeClass("pageinactive");
    $(".upcomingpage").addClass("pageactive");
});
$(".theaterdiv").click(function() {
    var nowActive = $(".pageactive");
    nowActive.removeClass("pageactive");
    nowActive.addClass("pageinactive"); 
    $(".theaterpage").removeClass("pageinactive");
    $(".theaterpage").addClass("pageactive");
});
$(".reservationdiv").click(function() {
    var nowActive = $(".pageactive");
    nowActive.removeClass("pageactive");
    nowActive.addClass("pageinactive"); 
    $(".reservationpage").removeClass("pageinactive");
    $(".reservationpage").addClass("pageactive");
});

$(".homeicondiv").click(function() {
    var nowActive = $(".pageactive");
    nowActive.removeClass("pageactive");
    nowActive.addClass("pageinactive"); 
    $(".mainpage").removeClass("pageinactive");
    $(".mainpage").addClass("pageactive");
});
$(".bookbtn").click(function(){
   var nowActive = $(".pageactive");
    nowActive.removeClass("pageactive");
    nowActive.addClass("pageinactive"); 
    $(".reservationpage").removeClass("pageinactive");
    $(".reservationpage").addClass("pageactive");
});

$(".ownerdiv").click(function(){
    var nowActive = $(".pageactive");
    nowActive.removeClass("pageactive");
    nowActive.addClass("pageinactive"); 
    $(".ownerpage").removeClass("pageinactive");
    $(".ownerpage").addClass("pageactive");
    $.getJSON("/movie/movielist", function( data ) {
            for(var i=0;i<5;i++){
                $(".ownerpage_movie").append("<tr class='movielist_content_"+i+"'></tr>");
                $(".movielist_content_"+i).append("<td><div class='movie_name_"+i+"'></div>");
                $(".movielist_content_"+i).append("<td><div class='movie_director_"+i+"'></div>");
                $(".movielist_content_"+i).append("<td><div class='movie_actor_"+i+"'></div>");
                $(".movielist_content_"+i).append("<td><div class='movie_genre_"+i+"'></div>");
                $(".movielist_content_"+i).append("<td><div class='movie_opendate_"+i+"'></div>");
                $(".movielist_content_"+i).append("<td><div class='movie_story_"+i+"'></div>");
                $(".movielist_content_"+i).append("<td><div class='movie_age_"+i+"'></div>");
                $(".movielist_content_"+i).append("<td class='td_btn'><button class='modify'>수정</button></td>");
                $(".movielist_content_"+i).append("<td class='td_btn'><button class='delete'>삭제</button></td>");

                $(".movie_name_"+i).text(data[i].name);
                $(".movie_director_"+i).text(data[i].director);
                $(".movie_actor_"+i).text(data[i].actor);
                $(".movie_genre_"+i).text(data[i].genre);
                $(".movie_opendate_"+i).text(data[i].opendate);
                $(".movie_story_"+i).text(data[i].story);
                $(".movie_age_"+i).text(data[i].age);

            }
        });
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

$(".kangnambtn").click(function() {
    var me = $(".kangnamtheater");
    var other = $(".kuritheater");

    me.removeClass("theaterinactive");
    other.addClass("theaterinactive");
    
});

$(".kuribtn").click(function() {
    var me = $(".kuritheater");
    var other = $(".kangnamtheater");
    me.removeClass("theaterinactive");
    other.addClass("theaterinactive");
});



$(".kangnambtn").click(function() {
    var me = $(".kangnamtheater");
    var other = $(".kuritheater");
    other.removeClass("theateractive");
    other.addClass("theaterinactive");
    me.removeClass("theaterinactive");
    me.addClass("theateractive");
});

$(".kuribtn").click(function() {
    var me = $(".kuritheater");
    var other = $(".kangnamtheater");
    other.removeClass("theateractive");
    other.addClass("theaterinactive");
    me.removeClass("theaterinactive");
    me.addClass("theateractive");
});

$(".signupstr").click(function() {
    var me = $(".signinarea");
    var other = $(".signuparea");
    me.removeClass("signactive");
    me.addClass("signinactive");
    other.removeClass("signinactive");
    other.addClass("signactive");
});

$(".signinstr").click(function() {
    var me = $(".signuparea");
    var other = $(".signinarea");
    me.removeClass("signactive");
    me.addClass("signinactive");
    other.removeClass("signinactive");
    other.addClass("signactive");
});



$(".finished").click(function() {
    var nowActive = $(".pageactive");
    nowActive.removeClass("pageactive");
    nowActive.addClass("pageinactive"); 
    $(".mypagediv").removeClass("pageinactive");
    $(".mypagediv").addClass("pageactive");
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
$(".storediv").click(function() {
    var nowActive = $(".pageactive");
    nowActive.removeClass("pageinactive");
    nowActive.addClass("pageinactive"); 
    $(".storepage").removeClass("pageinactive");
    $(".storepage").addClass("pageactive");
});
