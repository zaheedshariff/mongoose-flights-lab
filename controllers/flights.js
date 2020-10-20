let Flight = require('../models/flights'); // Import the model

// User Story 1, get all flights:
function indexAll (req, res) {
    Flight.find({}, function(err, db_results){
        res.render('flights/all.ejs', { db_results });
    })
};

// User story 2, add a new flight
function newFlightForm(req, res) {
    res.render('flights/new-flight-form.ejs');
};

// this function records into the database
function create(req, res) {
    Flight.create(req.body, function(err) { //this creates an object into the database
        res.redirect('/flights/all');  // in this instance its easier to do a redirect, as opposed to render, render will ask for the function and parameters
    })
};

// function recordFlight (req,res) {
//    res.send('new flight recorded');
// }

module.exports = {
    indexAll,
    newFlightForm,
    create,
};