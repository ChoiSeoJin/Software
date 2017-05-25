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
function numberCnt(e){
		var a = "."+e;
		$(a).append("<ul></ul>"); 
		
		for(var i=0;i<10;i++) {
			
			$(a+' ul').append("<li class='"+e+"_unselected' id='selected_"+i+"'><a id='data_"+i+"'>"+i+"</a></li>");
			
		}//"+e+"
		
		var a = "."+e+"_unselected";
			$(a).click(function() {
				var data_id = $(this).find('a').attr('id');
				alert(data_id);
				$('#'+data_id).addClass("cnt_Selected");
				$('#'+data_id).css('color',"White");
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
