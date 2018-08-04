const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const AutoriaSchema = new Schema({
    id: String, // CodigoMateria
    siglaCasa: String, // SiglaCasaIdentificacaoMateria
    nomeCasa: String, // NomeCasaIdentificacaoMateria
    siglaSubtipo: String, // SiglaSubtipoMateria
    descricaoSubtipo: String, // DescricaoSubtipoMateria
    numero: String, // NumeroMateria
    ano: String, // AnoMateria
    indicadorTramitando: String,
    ementa: String, // EmentaMateria
    indicadorAutorPrincipal: String,
    indicadorOutrosAutores: String,
    senador_id: String
});

const Autoria = mongoose.model('autoria', AutoriaSchema);

module.exports = Autoria;