var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    _id: String,
    name: String,
    type: Number,
    movie: String,
    host: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    guests: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    maxGuests: Number,
    price: Number,
    comment: String,
    dateTime: Date,
    location: String,
    isPublic: Boolean
});

mongoose.model('Event', EventSchema);