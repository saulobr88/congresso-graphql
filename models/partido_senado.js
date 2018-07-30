const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const PartidoSenadoSchema = new Schema({
    codigo: String,
    sigla: String,
    nome: String,
    dataCriacao: String
});

const PartidoSenado = mongoose.model('partido_senado', PartidoSenadoSchema);

module.exports = PartidoSenado;