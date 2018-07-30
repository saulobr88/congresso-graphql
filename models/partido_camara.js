const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const PartidoCamaraSchema = new Schema({
    id: String,
    sigla: String,
    nome: String
});

const PartidoCamara = mongoose.model('partido_camara', PartidoCamaraSchema);

module.exports = PartidoCamara;