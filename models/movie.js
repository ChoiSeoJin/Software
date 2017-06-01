var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    name: String,
    director: String,
    actor :String,
    genre :String,
    opendate :String,
    age :String,
    posterURL :String,
    videoURL :String,
    steelcutURL :String,
    story :String
});

module.exports = mongoose.model('movie', movieSchema);

