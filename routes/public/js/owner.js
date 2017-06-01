$(".movie_add").click(function() {
	console.log("asdfasdf");
	var m_name=$('#m_name').val();
	var m_director=$('#m_director').val();
	var m_actor=$('#m_actor').val();
	var m_genre=$('#m_genre').val();
	var m_opendate=$('#m_opendate').val();
	var m_age=$('#m_age').val();
	var m_posterURL=$('#m_posterURL').val();
	var m_videoURL=$('#m_videoURL').val();
	var m_steelcutURL=$('#m_steelcutURL').val();
	var m_story=$('m_story').val();

	$.ajax({
			type:'post',
			url: '/movie/addmovie',
			data: {
				    name: m_name,
				    director: m_director,
				    actor :m_actor,
				    genre : m_genre,
				    opendate : m_opendate,
				    age :m_age,
				    posterURL : m_posterURL,
				    videoURL : m_videoURL,
				    steelcutURL : m_steelcutURL,
				    story :m_story
			},
			
			success: function(data) {
					console.log("asdfasdf11");
				}
			});
});

