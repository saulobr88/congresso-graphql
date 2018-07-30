const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const StarshipSchema = new Schema({
    name: String,
    model: String,
    starship_class: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    crew: String,
    passengers: String,
    max_atmosphering_speed: String,
    hyperdrive_rating: String,
    MGLT: String,
    cargo_capacity: String,
    consumables: String,
    films: [String],
    pilots: [String],
    url: String,
    created: String,
    edited: String
});

const Starship = mongoose.model('starship', StarshipSchema);

module.exports = Starship;