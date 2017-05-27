$('.reservationpage .active').ready(function(){
		$('.theater').append("<div class='theater-select'></div>");
		$('.theater-select').append("<div class='theater-area-list'></div>");
		for(var i=0;i<4;i++){
			$('.time_table ul').append("<li class='reservation_list_"+i+"''></li");	
		}
		for(var i=0;i<4;i++){
			$('.reservation_list_'+i).append("<div class='listing-info'><div class='details'><div class='_name'>내이름은칸</div></div></div><div class ='body'></div>");
			for(var j=0;j<4;j++){
				$('.reservation_list_'+i+' .body').append("<div><a class='time_"+j+"'>5 : 00</a></div>");
			}
		}
		
		for(var i=0;i<4;i++){
			$('.theater-area-list').append("<div><a href='#' class='area_data_"+i+"'>지역_"+1+"</a></div>");
		}

		$('.theater-area-list').click(function(){
			for(var i = 0 ;i<4;i++)
			$('.theater-select').append("<div class='theater-list'>지역"+i+"</div>"); 
		});
});
$('number_info').ready(function(){
		$('.number_info div').each(function(index){
					var b=$(this).attr('class');
					NumberCnt(b);
		
	});
});
$('.movie_info').ready(function(){
	var movie_name=t;
	$('.body a').click(function(){
		
		var data_id_parent = $(this).parent().parent().parent();
		var t = $(data_id_parent).find('._name').text();
		
		//var movie_name = $('.reservation_list_'+i+ ' div div ._name').text();
		var movie_theater =$(data_id).text();
		var movie_theater_number;
		
		alert(movie_name);
		alert(movie_theater);
		});
});

function NumberCnt(e){
	var a = "."+e;
		$(a).append("<ul></ul>"); 
		
		for(var i=0;i<10;i++) {
			
			$(a+' ul').append("<li class='"+e+"_unselected' id='selected_"+i+"'><a id='data_"+i+"'>"+i+"</a></li>");	
		}
			var a = "."+e+"_unselected";
			$(a).click(function() {
				var data_id = $(this).find('a').attr('id');
				var class_id = $(this).attr('class');
				var data_class = $(this).find('a').attr('class');
				
				$(a).each(function(index){
					var temp=$(this).find('a').attr('class');
					
					if(temp=="cnt_Selected"){
					$(a+' #data_'+index).removeClass("cnt_Selected");
					$(a+' #data_'+index).css('color',"#333");
					}
				});
				if(data_class == "cnt_Selected"){
					$('.'+class_id +' #'+data_id).removeClass("cnt_Selected");
					$('.'+class_id +' #'+data_id).css('color',"#333");
				}
				else{
				$('.'+class_id +' #'+data_id).addClass("cnt_Selected");
				$('.'+class_id +' #'+data_id).css('color',"White");
			
				}
			}); 
		}
function seat_selected(i,j){

	    var obj = document.getElementById("Row_"+i+"_Col_"+j);
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

/*
function cnt_selected(i){
	alert(i+"명");
	var obj = document.getElementById("data_"+i);
  	if(obj.className=='cnt_Selected'){
	    	obj.className='.layout .seat_table tr td div';
	    }
	    else{
	    	obj.className='cnt_Selected';
	    }
}*/
