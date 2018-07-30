const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const PlanetSchema = new Schema({
    name: String,
    diameter: String,
    rotation_period: String,
    orbital_period: String,
    gravity: String,
    population: String,
    climate: String,
    terrain: String,
    surface_water: String,
    residents: [String],
    films: [String],
    url: String,
    created: String,
    edited: String
});

const Planet = mongoose.model('planet', PlanetSchema);

module.exports = Planet;