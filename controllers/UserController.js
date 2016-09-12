var mongoose = require('mongoose');
var passport = require('passport');
var User = mongoose.model('User');
require('../config/passport');
var Invitation = mongoose.model('Invitation');

module.exports.registerUser = function(req, res, next) {
    if (!req.body.username || !req.body.password || !req.body.firstname || !req.body.lastname) {
        return res.status(400).json({message: "Please fill out all fields"});
    }

    var user = new User();
    user.username = req.body.username;
    user.setPassword(req.body.password);
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        return res.json({token: user.generateJWT()})
    });
};

module.exports.login = function(req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({message: "Please fill out all fields"});
    }
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }

        if (user) {
            return res.json({token: user.generateJWT()});
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
};

module.exports.getUsers = function(req, res, next) {
    User.find(function(err, users){
        if(err){
            return next(err);
        }

        res.json(users);
    });
};
