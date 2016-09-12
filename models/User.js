var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    invitations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Invitation'}],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

mongoose.model('User', UserSchema);