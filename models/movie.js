var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    name: String,
    subtitle :String,
    director: String,
    actor :String,
    genre :String,
    opendate :String,
    age :String,
    count:String,
    star:String,
    posterurl :String,
    story :String,
    steelcuturl :String
});

module.exports = mongoose.model('movies', movieSchema);
