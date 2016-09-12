var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('express-jwt');

var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

var userController = require('../controllers/UserController');

/*router.get('/:user/invitations', auth, function(req, res, next) {
  //TODO: implement
});

router.get('/:user', auth, function(req, res, next) {

});*/

//Registration & Login
router.post('/register', userController.registerUser);

router.post('/login', userController.login);

//Parameters
router.param('user', function(req, res, next, id) {
    var query = User.findById(id);

    query.exec(function (err, user){
        if (err) {
            return next(err);
        }
        if (!user) {
            return next(new Error("can't find user"));
        }

        req.user = user;
        return next();
    });
});

//Getting Single User
router.get('/', auth, userController.getUsers);

router.get('/:user', auth, function(req, res, next) {
    res.json(req.user);
});

//router.get('/:user', userController.login);

/*
  router.put('/:id/invitations'
  router.get('/:id'
  router.post('/'
  router.get('/'
  router.put(':id/friends'
 */

module.exports = router;
