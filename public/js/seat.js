$('.reservationpage').ready(function(){
		var arealist=["서울","경기","인천"];
		var theaterlist =['강남','잠실','노원'];
		var theaterlist1=['구리','ㅁㄴㅇㄹ','ㅁㄴㅇㄻㄴㅇㄹ'];
		$('.theater').append("<div class='theater-select'></div>");
		$('.theater-select').append("<div class='theater-area-list'></div>");
		$('.theater-select').append("<div class='theater-list'></div>");
		for(var i=0;i<4;i++){
			$('.time_table ul').append("<li class='reservation_list_"+i+"''></li");	
		}
		for(var i=0;i<4;i++){
			$('.reservation_list_'+i).append("<div class='listing-info'><div class='details'><div class='_name'>내이름은칸</div></div></div><div class ='body'></div>");
			for(var j=0;j<4;j++){
				$('.reservation_list_'+i+' .body').append("<div><a href='#' id='time_"+j+"'  class ='seatlayoutdiv'>5 : 00</a></div>");
			}
		}
		
		for(var i=0;i<3;i++){
			$('.theater-area-list').append("<div><a href='#' class='area_data_"+i+"' onclick=test(theater-list); return false;>"+arealist[i]+"</a></div>");
		}
		for(var i = 0 ;i<2;i++)	
			$('.theater-list').append("<div class='theater-list_"+i+"'>"+theaterlist[i]+"</div>");

});
$('number_info').ready(function(){
		$('.number_info div').each(function(index){
					var b=$(this).attr('class');
					NumberCnt(b);
		
	});
});
$('.movie_info').ready(function(){
	$('.body a').click(function(){
		var nowActive = $(".active");
  		nowActive.removeClass("active");
   		nowActive.addClass("inactive"); 
   		$(".seatlayout").removeClass("inactive");
   		$(".seatlayout").addClass("active");
   		$(".seat").addClass("selected_active");
		var data_id_parent = $(this).parent().parent().parent();
		var data_id = $(this);

		var n = $(data_id_parent).find('._name').text();
	
		var t = $(data_id).text();
		//var t = $(data_id_parent).find('._name').text();
		//var t = $(data_id_parent).find('._name').text();
		//var movie_name = $('.reservation_list_'+i+ ' div div ._name').text();
		$(".movie_img").text("사진");
		$(".movie_name").text(n);
		$(".movie_theater").text(t);
		$(".movie_date").text(t);
		$(".movie_theater_number").text(t);
		 
		});
});
$('.mypagediv').ready(function(){
		var data_id_parent = $(this).parent().parent().parent();
		var data_id = $(this);

		var n = $(data_id_parent).find('._name').text();
	
		var t = $(data_id).text();
		//var t = $(data_id_parent).find('._name').text();
		//var t = $(data_id_parent).find('._name').text();
		//var movie_name = $('.reservation_list_'+i+ ' div div ._name').text();
		$(".user_id").text("ID");
		$(".user_name").text("name");
		$(".user_email").text("email");
		$(".user_cash").text("cash");	
		$('#mypage_reservation_tap').addClass('_active');
		$(".mypage_store_info").addClass("inactive");

		
		$('#mypage_store_tap').click(function(){
			$('#mypage_reservation_tap').removeClass('_active');
			$('#mypage_store_tap').addClass('_active');
			$('.mypage_reservation_info').removeClass('active');
			 var nowActive = $(".mypage_reservation_info");
    		nowActive.removeClass("active");
   			 nowActive.addClass("inactive"); 
   		 	$(".mypage_store_info").removeClass("inactive");
   			 $(".mypage_store_info").addClass("active");
		});
		$('#mypage_reservation_tap').click(function(){
			$('#mypage_store_tap').removeClass('_active');
			$('#mypage_reservation_tap').addClass('_active');

			 var nowActive = $(".mypage_store_info");
    		nowActive.removeClass("active");
   			 nowActive.addClass("inactive"); 
   		 	$(".mypage_reservation_info").removeClass("inactive");
   			 $(".mypage_reservation_info").addClass("active");
		});

});
$('.mypage_reservation_info').ready(function(){
	$('.finished').click(function(){
		for(var i=0;i<5;i++){
			$(".mypage_reservation_info").append("<li class = 'mypage_reservation_info_"+i+"'></li>");
			$(".mypage_reservation_info_"+i).append("<div class='movie_"+i+"' id = 'imagediv'><img src='img/kan.png' style : width='150px' height='180px'></div>");
			$(".mypage_reservation_info_"+i).append("<div class = 'mypage_movie_info_"+i+"' id='movie_info'></div>");
			$(".mypage_movie_info_"+i).append("<span>이 름:</span><div class='reservation_movie_name_"+i+"'></div>");
			$(".mypage_movie_info_"+i).append("<span>상영관:</span><div class='reservation_movie_theater_"+i+"'></div>");	
			$(".mypage_movie_info_"+i).append("<span>일시:</span><div class='reservation_movie_date_"+i+"'></div>");
			$(".mypage_movie_info_"+i).append("<span>상영관번호:</span><div class='reservation_movie_theatere_number_"+i+"'></div>");
			$(".reservation_movie_name_"+i).text($(".movie_name").text());
			$(".reservation_movie_theater_"+i).text($(".movie_theater").text());
			$(".reservation_movie_date_"+i).text($(".movie_date").text());
			$(".reservation_movie_theatere_number_"+i).text($(".movie_theater_number").text());
		}
	});
});
$('.mypage_store_info').ready(function(){

});
function TheaterAreaClickListener(event){

	   			
		var objDiv = document.getElementById(event);
     if(objDiv.style.display=="block"){ objDiv.style.display = "none"; }
      else{ objDiv.style.display = "block"; }

}
function NumberCnt(e){
	var a = "."+e;
		$(a).append("<ul></ul>"); 
		
		for(var i=0;i<10;i++) {
			
			$(a+' ul').append("<li class='"+e+"_unselected' id='selected_"+i+"'><a href='#' class='cnt' id='data_"+i+"'>"+i+"</a></li>");	
		}
			var a = "."+e+"_unselected";
			$(a).click(function() {
				$(".seat").removeClass("selected_active");
				var data_id = $(this).find('a').attr('id');
				var class_id = $(this).attr('class');
				var data_class = $(this).find('a').attr('class');
				
				$(a).each(function(index){
					var temp=$(this).find('a').attr('class');
					
					if(temp=="cnt Selected"){
					$(a+' #data_'+index).removeClass("Selected");
					$(a+' #data_'+index).css('color',"#333");
					}
					
				});
				
				alert(data_id)
				if(data_class == "cnt"){
					$('.'+class_id +' #'+data_id).addClass("Selected");
					$('.'+class_id +' #'+data_id).css('color',"White");
				}
			}); 
		}
function seat_selected(i,j){

	    var obj = document.getElementById("Row_"+i+"_Col_"+j);
	    var cnt_number = document.getElementsByClassName("cnt Selected")[0].text;
	    if(cnt_number !=NULL){
	    	
	    }
	    console.log(cnt_number);
	   
	    	if(obj.className=='Row_Col_Selected'){
	    
	    		obj.className='.layout .seat_table tr td div';
	   			
			   	}
		    else{
		    	obj.className='Row_Col_Selected';
		    }
	    
	  
}

function seatlayout(){
	var seatname=['A','B','C','D','E','F','G','H','I','J','K','L','M'];
	$(".layout").append("<table class='seat_table' cellspacing='0' cellpadding='0' style='width:75%'></table>");
	
	for(var i=0;i<13;i++){
		$(".seat_table").append("<tr class=Row_"+i+"><td><div class = seatname_'"+seatname[i]+"'><span>"+seatname[i]+"</span></div></td>");
		$(".Row_" +i).append("<td class = Col_"+i+"></td>");
		for(var j=1;j<21;j++)
		$(".Col_" +i).append("<div id = 'Row_"+i+"_Col_"+j+"'><a href='#' class='available' onClick='seat_selected("+i+","+j+")'>"+j+"</a></div>");

		$(".Row_"+i).append("</td>");

		$(".seat_table"+' tr').append("</tr>");
   }
 }

$( "#side" ).click(function() {
	$( "#slidable" ).animate({width: 'toggle'});
});
