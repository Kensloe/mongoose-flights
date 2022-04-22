const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes start with : /flights (because of the mounting in server.js)

/*GET /flights */
router.get('/',flightsCtrl.index);

/* GET /flights/new */
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.post('/:id/destination', flightsCtrl.addDestination);
router.delete('/:id', flightsCtrl.deleteFlight);
router.post('/:id/ticket',flightsCtrl.addTicket);

module.exports = router;

