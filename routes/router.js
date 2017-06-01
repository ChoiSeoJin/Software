var path = require('path');

module.exports = function(app, Member,Movie) {
	app.get('/', function( req, res) {
		res.render(path.resolve(__dirname + '/../public/index.html'));
	});
	app.post('/login/member', function( req, res) {
		Member.findOne({id: req.body.id, password: req.body.password}, function(err, member) {
			if(err) console.log("addmember error");
			if(member) {
				res.end("OK");
			} else {
				res.end("NO");
			}
		})
	});
	app.post('/login/addmember', function( req, res) {
		Member.findOne({id: req.body.id}, function(err, member) {
			if(err) console.log("addmember error");
			if(!member) {
				var member = new Member();
				member.id = req.body.id;
				member.password = req.body.password;

				member.save(function(err) {
					if(err) console.log("member save err");
				});

				res.end("OK");
			} else {
				res.end("NO");
			}
		})
	});

	app.post('/movie/addmovie', function(req, res) {
		console.log("asdmfo");
				var movie = new Movie();
				movie.name = req.body.name;
				moive.actor = req.body.actor;
				movie.director = req.body.director;
 				movie.genre =  req.body.genre;
 				movie.opendate = req.body.opendate;
 				movie.age =req.body.age;
 				movie.posterURL = req.body.posterURL;
 				movie.videoURL = req.body.videoURL;
 				movie.steelcutURL = req.body.steelcutURL;
 				movie.story = req.body.story;
				movie.save(function(err) {
					if(err) console.log("movie save err");
				});

				res.end("OK");
			});
		
}
