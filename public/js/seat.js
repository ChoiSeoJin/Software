function seatlayout(){
   
   
 
}
function numberCnt(e){
	
		$(e).append("<ul></ul>"); 
	
		for(var i=0;i<10;i++)
		$(e+' ul').append("<li class='selected' id=selected_"+i+"><a id=data_"+i+">"+i+"</a></li>"); 
}
$("#data_1").click(function() {
	alert("111");
	

});