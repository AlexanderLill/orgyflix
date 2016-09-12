var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    name: String,
    movie: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie'},
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