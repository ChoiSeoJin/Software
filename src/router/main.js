var fs = require('fs');
var path = require('path');

module.exports = function(app) {
	app.get('/', function( req, res) {
		res.render('index.html');
	});
	app.get('/about', function( req, res) {
		res.send('xx: ' );
	});
	app.get('/img/:movieName',function (req, res) {
		res.sendFile(path.resolve(__dirname+'/../public/images/'+req.params.movieName+'.jpg'));
	});
}