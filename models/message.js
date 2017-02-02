var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');
//Message Schema for Message Collection on MongoDB
var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'} //create association between user on messages.
});

schema.post('remove', function(msg){
    User.findById(msg.user, function(err,user){
        user.messages.pull(msg);
        user.save(); //deassoctaing message from user when removing a message.
    });
});//do it after certain action

module.exports = mongoose.model('Message', schema);//export the schema as a model for usage on other server files.