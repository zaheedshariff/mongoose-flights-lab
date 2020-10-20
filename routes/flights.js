var express = require('express');
var router = express.Router();

// Restful routers
// Import flight controller
const flightCtrl = require('../controllers/flights');  // need to delcare flight controller

// Map flights routes
router.get('/all', flightCtrl.indexAll)  // User story 1, get all the flights

// User story 2, create new flights

// need to get flights/new
router.get('/new-flight-form', flightCtrl.newFlightForm)

//this will handle the form data
router.post('/new-flights', flightCtrl.create)  // create is standard for this action

// Post new flights
// router.post('/', flightCtrl.create) // User story 2, create new flights

module.exports = router;
