const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const SpecieSchema = new Schema({
    name: String,
    classification: String,
    designation: String,
    average_height: String,
    average_lifespan: String,
    eye_colors: String,
    hair_colors: String,
    skin_colors: String,
    language: String,
    homeworld: String,
    people: [String],
    films: [String],
    pilots: [String],
    url: String,
    created: String,
    edited: String
});

const Specie = mongoose.model('specie', SpecieSchema);

module.exports = Specie;