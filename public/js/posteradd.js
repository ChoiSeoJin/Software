(function() {
	var movies = [];

	$.ajax({
        type: 'get',
        url: '/movie/movielist',
        success: function(data) {
        		for(var i=0; i<data.length; i++) {
        			var movieinfor = {};

        			movieinfor.m_name = data[i].name;
        			movieinfor.m_subtitle= data[i].subtitle;
        			movieinfor.m_director = data[i].director;
        			movieinfor.m_actor = data[i].actor;
        			movieinfor.m_genre = data[i].genre;
        			movieinfor.m_opendate = data[i].opendate;
        			movieinfor.m_age = data[i].age;
        			movieinfor.m_count = data[i].count;
        			movieinfor.m_star = "평점" + data[i].star;
			     movieinfor.m_posterurl = data[i].posterurl;
			     movieinfor.m_story = data[i].story;
			     movieinfor.m_steelcuturl = data[i].steelcuturl;

			    	var ageimgstr = agechoise(movieinfor.m_age);

			    movies.push(movieinfor);
			    
			    if(i >=0 && i<=3) {
			    		$('.list_m_1').append(""+
					'<div class="first">' +
					'<div class="movieimg" id="' + i  + '">' +
					'<a id="manman" href="#myModal" data-toggle="modal"><img src="' + movieinfor.m_posterurl +'" id="' + i +'posterarr"></a>'+ 
					'</div>' +
					'<div class="movieinfor">' +
					'<div class="stars">' + 
					'<div class="starstr">' + movieinfor.m_star + '</div>' + 
					'<div class="startimg">★★★★★</div>' + 
					'</div>' + 
					'<div class="moviename">' +
					'<div class="ageimg"><img src="' + ageimgstr +'" /></div>' +
					'<div class="movieTitle">' + movieinfor.m_name + '</div>' +
					'</div>' + 
					'<div class="bookbtn">예약</div>' + 
					'</div>' + 
					'</div>');

			    } 

			    if(i>=4 && i<=7) {
			    		$('.list_m_1_1').append(""+
					'<div class="first">' +
					'<div class="movieimg" id="' + i  + '">' +
					'<a id="manman" href="#myModal" data-toggle="modal"><img src="' + movieinfor.m_posterurl +'" id="' + i +'posterarr"></a>'+ 
					'</div>' +
					'<div class="movieinfor">' +
					'<div class="stars">' + 
					'<div class="starstr">' + movieinfor.m_star + '</div>' + 
					'<div class="startimg">★★★★★</div>' + 
					'</div>' + 
					'<div class="moviename">' +
					'<div class="ageimg"><img src="' + ageimgstr +'" /></div>' +
					'<div class="movieTitle">' + movieinfor.m_name + '</div>' +
					'</div>' + 
					'<div class="bookbtn">예약</div>' + 
					'</div>' + 
					'</div>');



			    } 

			    if(i>=0 && i<=9) {
			    		$('.list_m_2').append(""+
					'<div class="first">' +
					'<div class="movieimg" id="' + i  + '">' +
					'<a id="manman" href="#myModal" data-toggle="modal"><img src="' + movieinfor.m_posterurl +'" id="' + i +'posterarr"></a>'+ 
					'</div>' +
					'<div class="movieinfor">' +
					'<div class="stars">' + 
					'<div class="starstr">' + movieinfor.m_star + '</div>' + 
					'<div class="startimg">★★★★★</div>' + 
					'</div>' + 
					'<div class="moviename">' +
					'<div class="ageimg"><img src="' + ageimgstr +'" /></div>' +
					'<div class="movieTitle">' + movieinfor.m_name + '</div>' +
					'</div>' + 
					'<div class="bookbtn">예약</div>' + 
					'</div>' + 
					'</div>');


			    } 

			    if(i>=10 && i<=19) {
			    		$('.list_m_3').append(""+
					'<div class="first">' +
					'<div class="movieimg" id="' + i  + '">' +
					'<a id="manman" href="#myModal" data-toggle="modal"><img src="' + movieinfor.m_posterurl +'" id="' + i +'posterarr"></a>'+ 
					'</div>' +
					'<div class="movieinfor">' +
					'<div class="stars">' + 
					'<div class="starstr">' + movieinfor.m_star + '</div>' + 
					'<div class="startimg">★★★★★</div>' + 
					'</div>' + 
					'<div class="moviename">' +
					'<div class="ageimg"><img src="' + ageimgstr +'" /></div>' +
					'<div class="movieTitle">' + movieinfor.m_name + '</div>' +
					'</div>' + 
					'<div class="bookbtn">예약</div>' + 
					'</div>' + 
					'</div>');


			    }


			    			 
			    
		
				}

				$('.first').click(function() {
					var t = $(this).children().first();
					var id = t.attr("id")
					
					$('#inmodaltitle').text(movies[Number(id)].m_name);
					$('#intmodalsubtitle').text(movies[Number(id)].m_subtitle);
					$('#inmodaldirector').text(movies[Number(id)].m_director);
					$('#inmodalactor').text(movies[Number(id)].m_actor);
					$('#inmodalgenre').text(movies[Number(id)].m_genre);
					$('#inmodalopendate').text(movies[Number(id)].m_opendate);
					$('#inmodalgrade').text(movies[Number(id)].m_age);
					$('#inmodalcount').text(movies[Number(id)].m_count);
					$('#inmodalstar').text(movies[Number(id)].m_star);
					$('#inmodalimg').attr('src',movies[Number(id)].m_posterurl);
					$('#inmodalstory').text(movies[Number(id)].m_story);

					var token = movies[Number(id)].m_steelcuturl.split(",");
					for(var x=0; x<token.length; x++) {
						
						$('#inmodalsteel'+(x+1)).attr('src',token[x]);
					}


				});



		}
	});
	
})();



function agechoise(agestr) {
	if(agestr == "0세 관람가") return "/img/all.png";
	else if(agestr == "12세 관람가") return "/img/twelve.png";
	else if(agestr == "15세 관람가") return "/img/fifteen.png";
	else if(agestr == "19세 관람가") return "/img/nineteen.png";
}


