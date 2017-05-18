var express = require('express');
var path = require('path');
var app = express();
var router = require('../router/main')(app);

app.set('views', path.resolve(__dirname + '/../views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('../public'));
app.use(express.static('./'));