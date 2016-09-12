var mongoose = require('mongoose');

var InvitationSchema = new mongoose.Schema({
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
});

mongoose.model('Invitation', InvitationSchema);