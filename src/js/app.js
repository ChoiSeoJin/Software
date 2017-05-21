$(".upcoming").click(function() {
	var nowActive = $(".active");
	nowActive.removeClass("active");
	nowActive.addClass("inactive");	
	$(".upcomingPage").removeClass("inactive");
	$(".upcomingPage").addClass("active");
});
$(".newmovie").click(function() {
	var nowActive = $(".active");
	nowActive.removeClass("active");
	nowActive.addClass("inactive");	
	$(".newMoviePage").removeClass("inactive");
	$(".newMoviePage").addClass("active");
});
$(".theater").click(function() {
	var nowActive = $(".active");
	nowActive.removeClass("active");
	nowActive.addClass("inactive");	
	$(".theaterPage").removeClass("inactive");
	$(".theaterPage").addClass("active");
});
$(".reservation").click(function() {
	var nowActive = $(".active");
	nowActive.removeClass("active");
	nowActive.addClass("inactive");	
	$(".reservationPage").removeClass("inactive");
	$(".reservationPage").addClass("active");
});
$(".homeBtn").click(function() {
	var nowActive = $(".active");
	nowActive.removeClass("active");
	nowActive.addClass("inactive");	
	$(".page").removeClass("inactive");
	$(".page").addClass("active");
});
$(".login").click(function() {
	alert("login");
});



(function($) {
  //$(".page").addClass("inactive");
  
})(jQuery);