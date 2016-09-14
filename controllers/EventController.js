var mongoose = require('mongoose');

var Invitation = mongoose.model('Invitation');
var User = mongoose.model('User');
var Event = mongoose.model('Event');

module.exports.getEvents = function(req, res, next) {

    Event.find(function(err, events) {
        if (err) {
            return next(err);
        }

        res.json(events);
    });
};

module.exports.createEvent = function(req, res, next) {
    var event = new Event(req.body);
    event.save(function(err, event) {
        if (err) {
            return next(err);
        }

        res.json(event);
    });
};

module.exports.findEvent = function(req, res, next, id) {
    var query = Event.findById(id);
    query.exec(function (err, event) {
        if (err) {
            return next(err);
        }

        if (!event) {
            return next(new Error('can\'t find event'));
        }

        req.event = event;
        return next();
    })
};

module.exports.getEvent = function(req, res, next) {

    //TODO: Do not populate hosts salt and hash
    req.event.populate('guests host', function(err, event) {
        if (err) {
            return next(err);
        }

        event.host.salt = '';
        event.host.hash = '';

        res.json(event);
    });
};

module.exports.joinEvent = function(req, res, next) {

    //TODO: Get user _id
    //TODO: Test
    var user = new User();

    req.event.guests.push(user);
    req.event.save(function(err, event) {
        if (err) {
            return next(err);
        }

        res.json(event);
    });
};