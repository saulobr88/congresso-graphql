const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const SenadorSchema = new Schema({
    id: String, // CodigoParlamentar
    nome: String, // NomeParlamentar
    nomeCivil: String, // NomeCompletoParlamentar
    sexo: String, // SexoParlamentar
    formaTratamento: String,
    urlFoto: String,
    email: String,
    siglaPartido: String, // SiglaPartidoParlamentar
    siglaUf: String, // UfParlamentar
    dataNascimento: String,
    ufNascimento: String, //UfNaturalidade
    endereco: String, // EnderecoParlamentar
    telefone: String, // TelefoneParlamentar
    fax: String // FaxParlamentar
});

const Senador = mongoose.model('senadores', SenadorSchema);

module.exports = Senador;