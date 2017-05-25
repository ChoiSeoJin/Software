var path = require('path');

module.exports = function(app) {
	app.get('/', function( req, res) {
		res.render(path.resolve(__dirname + '/../public/index.html'));
	});
	app.get('/about', function( req, res) {
		res.render('about.html');
	});
}