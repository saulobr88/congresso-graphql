// Para TESTES APENAS

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const PessoaSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'O Campo nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'O Campo email é obrigatório']
    }
});

const Pessoa = mongoose.model('pessoa', PessoaSchema);

module.exports = Pessoa;