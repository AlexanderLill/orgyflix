var mongoose = require('mongoose');
var passport = require('passport');
var User = mongoose.model('User');
require('../config/passport');
var Invitation = mongoose.model('Invitation');

module.exports.registerUser = function(req, res, next) {
    if (!req.body.username || !req.body.password || !req.body.firstname || !req.body.lastname) {
        return res.status(400).json({message: "Please fill out all fields"});
    }

    //Checking if user already exists
    var query = User.findOne({'username' : req.body.username});

    query.exec(function (err, user){
        if (err) {
            return next(err);
        }
        if (user) {
            return next(new Error("user already exists"));
        }

        var newUser = new User();
        newUser.username = req.body.username;
        newUser.setPassword(req.body.password);
        newUser.firstname = req.body.firstname;
        newUser.lastname = req.body.lastname;

        newUser.save(function (err) {
            if (err) {
                return next(err);
            }
            return res.json({token: newUser.generateJWT()})
        });
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

module.exports.addFriend = function(req, res, next) {
    if (!req.body.friend) {
        return res.status(400).json({message: "No friend _id was given"});
    }

    var query = User.findById(req.body.friend);
    query.exec(function(err, friend) {
        if (err) {
            return next(err);
        }
        if (!friend) {
            return next(new Error("Specified user does not exist"));
        }

        req.user.addFriend(friend, function(err) {
            if (err) {
                return next(err);
            }
            return res.json(req.user);
        });
    });
};
