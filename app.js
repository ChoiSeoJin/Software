var express = require('express');
var path = require('path');
var app = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://223.194.44.71/test');

var Member = require('./models/member');
var Movie=require('./models/movie');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = require('./routes/router')(app, Member,Movie);

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
    console.log(__dirname);
});

app.use(express.static(path.resolve(__dirname+"/public/")));
