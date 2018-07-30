const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const PersonSchema = new Schema({
    name: String,
    birth_year: String,
    eye_color: String,
    gender: String,
    hair_color: String,
    height: String,
    mass: String,
    skin_color: String,
    homeworld: String,
    films: [String],
    species: [String],
    starships: [String],
    vehicles: [String],
    url: [String],
    created: String,
    edited: String
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;