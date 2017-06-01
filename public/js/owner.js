$(".movie_add").click(function() {
    var m_name = $('#m_name').val();
    var m_subtitle = $('#m_subtitle').val();
    var m_director = $('#m_director').val();
    var m_actor = $('#m_actor').val();
    var m_genre = $('#m_genre').val();
    var m_opendate = $('#m_opendate').val();
    var m_age = $('#m_age').val();
    var m_count = $('#m_count').val();
    var m_star = $('#m_star').val();
    var m_posturl = $('#m_posturl').val();
    var m_story = $('#m_story').val();
    var m_steelcuturl = $('#m_steelcuturl').val();

    $.ajax({
        type: 'post',
        url: '/movie/addmovie',
        data: {
            name: m_name,
            subtitle : m_subtitle,
            director: m_director,
            actor : m_actor,
            genre : m_genre,
            opendate : m_opendate,
            age : m_age,
            count: m_count,
            star: m_star,
            posterURL : m_posturl,
            story : m_story,
            steelcutURL : m_steelcuturl
        },

        success: function(data) {

        }
    });

    $('#m_name').val("");
    $('#m_subtitle').val("");
    $('#m_director').val("");
    $('#m_actor').val("");
    $('#m_genre').val("");
    $('#m_opendate').val("");
    $('#m_age').val("");
    $('#m_count').val("");
    $('#m_star').val("");
    $('#m_posturl').val("");
    $('#m_story').val("");
    $('#m_steelcuturl').val("");


});
$("#movieListBtn").click(function() {
    $("#movielistcontent").css("display", "inline-block");
    $("#movieaddcontent").css("display", "none");
    $("#memberlistdiv").css("display", "none");

    initializeMovieList();
    getMovieList();
});

$("#movieAddBtn").click(function() {
    $("#movielistcontent").css("display", "none");
    $("#movieaddcontent").css("display", "inline-block");
    $("#memberlistdiv").css("display", "none");
    initializeMovieList();
});

$("#memberListBtn").click(function() {
    $("#movielistcontent").css("display", "none");
    $("#movieaddcontent").css("display", "none");
    $("#memberlistdiv").css("display", "inline-block");
    getAllMember();
});

$(".ownerdiv").click(function() {
    var nowActive = $(".pageactive");
    nowActive.removeClass("pageactive");
    nowActive.addClass("pageinactive");
    $(".ownerpage").removeClass("pageinactive");
    $(".ownerpage").addClass("pageactive");

    $("#movielistcontent").css("display", "inline-block");
    $("#movieaddcontent").css("display", "none");
    $("#memberlistdiv").css("display", "none");

    initializeMovieList();
    getMovieList();

});


function initializeMovieList() {
    $("tbody > #trlist").remove();
}


function getMovieList() {
    $.getJSON("/movie/movielist", function(data) {

        for (var i = 0; i < data.length; i++) {
            $(".ownerpage_movie").append("<tr class='movielist_content_" + i + "' id='trlist'></tr>");
            $(".movielist_content_" + i).append("<td><div class='movie_name_" + i + "'></div>");
            $(".movielist_content_" + i).append("<td><div class='movie_director_" + i + "'></div>");
            $(".movielist_content_" + i).append("<td><div class='movie_actor_" + i + "'></div>");
            $(".movielist_content_" + i).append("<td><div class='movie_genre_" + i + "'></div>");
            $(".movielist_content_" + i).append("<td><div class='movie_opendate_" + i + "'></div>");
            $(".movielist_content_" + i).append("<td><div class='movie_age_" + i + "'></div>");
            
            $(".movielist_content_" + i).append("<td class='td_btn'><div class='modify' style='cursor: Pointer;'>수정</div></td>");
            $(".movielist_content_" + i).append("<td class='td_btn'><div class='delete' style='cursor: Pointer'>삭제</div></td>");

            $(".movie_name_" + i).text(data[i].name);
            $(".movie_director_" + i).text(data[i].director);
            $(".movie_actor_" + i).text(data[i].actor);
            $(".movie_genre_" + i).text(data[i].genre);
            $(".movie_opendate_" + i).text(data[i].opendate);
           
            $(".movie_age_" + i).text(data[i].age);

            $('.delete').click(function() {
                var x = $(this).parent().parent();
                var m_name = x.children().first().text();

                $.ajax({
                    type: 'post',
                    url: '/movie/removemovie',
                    data: {
                        name: m_name
                    },
                    success: function(data) {

                    }
                });
                x.remove();

            });



        }
    });


}

function getAllMember() {
 	$.getJSON("/get/member", function(data) {
 		var listparent = $('.outmemberList');

 		for(var i=0; i<data.length; i++) {
 			console.log(data[i].id);
 			listparent.append("<div style='border-left:3px solid black; float:left; width:300px; font-size:18px;'>" + data[i].id + "</div>");
                                    listparent.append("<div style='border-right:3px solid black; border-bottom:3px solid black;font-size:18px; cursor: Pointer; '>" + '삭제'+ "</div>");
        	}
 	});

 	
 
}

