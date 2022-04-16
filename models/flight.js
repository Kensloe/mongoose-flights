const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaaRating: String,
    cast: [String],
    nowShowing : Boolean,
});

module.exports = mongoose.model('Flight', flightSchema);
