const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const DeputadoDespesaSchema = new Schema({
    id_deputado: String,
    ano: String,
    mes: String,
    tipoDespesa: String,
    idDocumento: String,
    tipoDocumento: String,
    idTipoDocumento: String,
    dataDocumento: String,
    valorDocumento: String,
    urlDocumento: String,
    nomeFornecedor: String,
    cnpjCpfFornecedor: String,
    valorLiquido: String,
    valorGlosa: String,
    numRessarcimento: String,
    idLote: String,
    parcela: String
});

const DeputadoDespesa = mongoose.model('deputados_despesas', DeputadoDespesaSchema);

module.exports = DeputadoDespesa;