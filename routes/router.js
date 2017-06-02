var path = require('path');

module.exports = function(app, Member, Movie) {
    app.get('/', function(req, res) {
        res.render(path.resolve(__dirname + '/../public/index.html'));
    });
    app.post('/login/member', function(req, res) {
        Member.findOne({
            id: req.body.id,
            password: req.body.password
        }, function(err, member) {
            if (err) console.log("addmember error");
            if (member) {
                console.log(member.auth);
                if (member.auth == "1") {
                    res.end("ADMIN");
                } else {
                    res.end("OK");
                }

            } else {
                res.end("NO");
            }
        })
    });
    app.post('/login/addmember', function(req, res) {
        Member.findOne({
            id: req.body.id
        }, function(err, member) {
            if (err) console.log("addmember error");
            if (!member) {
                var member = new Member();
                member.id = req.body.id;
                member.password = req.body.password;
                member.auth = "0";

                member.save(function(err) {
                    if (err) console.log("member save err");
                });
                res.end("OK");
            } else {
                res.end("NO");
            }
        });
    });

    app.post('/movie/addmovie', function(req, res) {
        console.log("asdmfo");
        var movie = new Movie();
        movie.name = req.body.name;
        movie.subtitle = req.body.subtitle;
        movie.director = req.body.director;
        movie.actor = req.body.actor;
        movie.genre = req.body.genre;
        movie.opendate = req.body.opendate;
        movie.age = req.body.age;
        movie.count = req.body.count;
        movie.star = req.body.star;
        movie.posterurl = req.body.posturl;
        movie.story = req.body.story;
        movie.steelcuturl = req.body.steelcuturl;

        movie.save(function(err) {
            if (err) console.log("movie save err");
        });

        res.end("OK");
    });
    app.get('/get/member', function(req, res) {
        Member.find(function(err, members) {
            if (err) console.log("addmember error");
            if (!members) {
                console.log("NO MEMBER");
                res.end("NO");
            } else {
                res.json(members);
            }

        });


    });
    app.get('/movie/movielist', function(req, res) {
        Movie.find(function(err, movies) {
            if (err) return res.status(500).send({
                error: 'database failure'
            });
            res.json(movies);
        });
    });
    app.post('/movie/removemovie', function(req, res) {
        Movie.remove({name:req.body.name}, function(err, movie) {
            if(err) return res.status(500).json({ error: "database failure" });
            res.end("good");
        });
    });
    app.get('/keyboard',function(req, res) {
        console.log('keyboard');
	var str = '{"type":"buttons","buttons":["Now Playing","UpComing"]}'
	res.end(str);
    });
    app.post('/message',function(req,res) {
	Movie.find(function(err, movies) {
            var movieinfor = JSON.stringify(movies);
            var jsonstr = JSON.parse(movieinfor);
            var sendmsg = "";
            var x = 0;
            var length = 0;
            var order = 1;
            console.log(req.body.content);
            if(req.body.content == "NOW PLAYING") {
                console.log("aa");
                sendmsg = "NOW PLAYING MOVIES\\n";
                x=0;
                length = 10;
            } else {
                console.log("bb");
                sendmsg = "UPCOMING MOVIES\\n";
                x=10;
                length = 20;
            }
            for(x; x < length ; x++) {
                var temp = '' + order +'.' + jsonstr[x].name + '\\n';
                sendmsg += temp;
                order++;
            }
            var teststr = '{"message":{"text":"' + sendmsg  + '"},"keyboard":{"type":"buttons","buttons":["NOW PLAYING","UPCOMING"]}}';
            var str = '{"message":{"text":"'+movieinfor+'"},"keyboard":{"type":"buttons","buttons":["Now Playing", "Up Coming"]}}';
	    res.end(teststr);
        });
    });


}
