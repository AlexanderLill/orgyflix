var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    name: String,
    imdb: String,
    type: Number
});

mongoose.model('Movie', MovieSchema);