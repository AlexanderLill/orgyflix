var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
  router.put('/:id/invitations'
  router.get('/:id'
  router.post('/'
  router.get('/'
  router.put(':id/friends'
 */

module.exports = router;
