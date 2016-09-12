var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var eventController = require('../controllers/EventController');

var Invitation = mongoose.model('Invitation');
var User = mongoose.model('User');
var Movie = mongoose.model('Movie');
var Event = mongoose.model('Event');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Orgyflix' });
});

router.post('/', eventController.createEvent);



eventController.createEvent("title", "imdbNr");
/*
    router.get('/' - with filters for list
    router.post('/' - with everything to create a new one
    router.get('/:id'
    router.put('/:id'
 */

module.exports = router;



