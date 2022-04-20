const express = require('express');
const router = express.Router();
// You Do - require the yet to be created
// reviews controller
const reviewsCtrl = require('../controllers/reviews');


// You Do - Define the Route
// POST /flights/:id/reviews
router.post('/flights/:id/reviews', reviewsCtrl.create);

module.exports = router;
