const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const VehicleSchema = new Schema({
    name: String,
    model: String,
    vehicle_class: String,
    manufacturer: String,
    length: String,
    cost_in_credits: String,
    crew: String,
    passengers: String,
    max_atmosphering_speed: String,
    cargo_capacity: String,
    consumables: String,
    films: [String],
    pilots: [String],
    url: String,
    created: String,
    edited: String
});

const Vehicle = mongoose.model('vehicle', VehicleSchema);

module.exports = Vehicle;