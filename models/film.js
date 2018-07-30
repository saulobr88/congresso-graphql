const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const FilmSchema = new Schema({
    title: String,
    episode_id: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    species: [String],
    starships: [String],
    vehicles: [String],
    characters: [String],
    planets: [String],
    url: String,
    created: String,
    edited: String
});

const Film = mongoose.model('film', FilmSchema);

module.exports = Film;