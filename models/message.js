var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Message Schema for Message Collection on MongoDB
var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'} //create association between user on messages.
});

module.exports = mongoose.model('Message', schema);//export the schema as a model for usage on other server files.