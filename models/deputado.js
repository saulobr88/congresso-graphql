const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const DeputadoSchema = new Schema({
    id: String,
    nomeCivil: String,
    nome: String,
    siglaPartido: String,
    siglaUf: String,
    idLegislatura: String,
    urlFoto: String,
    dataUltimoStatus: String,
    nomeEleitoral: String,
    situracao: String,
    condicaoEleitoral: String,
    cpf: String,
    sexo: String,
    urlWebsite: String,
    redeSocial: String,
    dataNascimento: String,
    dataFalecimento: String,
    ufNascimento: String,
    municipioNascimento: String,
    escolaridade: String
});

const Deputado = mongoose.model('deputado', DeputadoSchema);

module.exports = Deputado;