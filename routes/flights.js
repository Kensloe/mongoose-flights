const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes start with : /flights (because of the mounting in server.js)

//.GET./movies
router.get('/', flightsCtrl.index);
// GET /movies/new (new functionality)
router.get('/new', flightsCtrl.new);
// POST /flights (create functionality)
router.post('/', flightsCtrl.create);

module.exports = router;
