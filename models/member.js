var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    id: String,
    password: String,
    auth: String

});

module.exports = mongoose.model('member', memberSchema);