var express = require('express');
var path = require('path');
var app = express();
var router = require('./routes/router')(app);
var mongoose = require('mongoose');
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
    console.log(__dirname);
});

app.use(express.static(path.resolve(__dirname+"/public/")));