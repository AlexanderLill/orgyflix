var express = require('express');
var router = express.Router();

var eventController = require('../controllers/EventController');

router.get('/', eventController.getEvents);
router.post('/', eventController.createEvent);

router.param('event', eventController.findEvent);
router.get('/:event', eventController.getEvent);
router.put('/:event', eventController.joinEvent);

module.exports = router;
