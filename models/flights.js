const mongoose = require('mongoose');

const Schema = mongoose.Schema


const flightSchema = new Schema({
    airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    },
    airport: {
    type: String,
    default: 'DEN',    //this is how you default
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'DEN'],
    },
    flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    },
    departs: {
    type: Date,
    min: Date.now(), //need to fix this to include today's date, plus 1 year
    }
  });

  module.exports = mongoose.model('Flights', flightSchema);