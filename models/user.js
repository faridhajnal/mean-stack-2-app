var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator'); //helps with the 'unique' validation.

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}] //associating to the Message Schema.
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema); //exporting schema as User Model for usage on other files.