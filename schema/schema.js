const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const Deputado = require('../models/deputado');
const PartidoCamara = require('../models/partido_camara');
const DeputadoDespesa = require('../models/deputado_despesa');
const Senador = require('../models/senador');
const PartidoSenado = require('../models/partido_senado');
const Autoria = require('../models/autoria');

const DeputadoType = new GraphQLObjectType({
    name: 'deputado',
    fields: () => ({
        id: { type: GraphQLString },
        nomeCivil: { type: GraphQLString },
        nome: { type: GraphQLString },
        siglaPartido: { type: GraphQLString },
        siglaUf: { type: GraphQLString },
        idLegislatura: { type: GraphQLString },
        urlFoto: { type: GraphQLString },
        dataUltimoStatus: { type: GraphQLString },
        nomeEleitoral: { type: GraphQLString },
        situracao: { type: GraphQLString },
        condicaoEleitoral: { type: GraphQLString },
        cpf: { type: GraphQLString },
        sexo: { type: GraphQLString },
        urlWebsite: { type: GraphQLString },
        redeSocial: { type: GraphQLString },
        dataNascimento: { type: GraphQLString },
        dataFalecimento: { type: GraphQLString },
        ufNascimento: { type: GraphQLString },
        municipioNascimento: { type: GraphQLString },
        escolaridade: { type: GraphQLString },
        partido: {
            type: PartidoCamaraType,
            resolve(parent, args){
                return PartidoCamara.findOne({ sigla: `${parent.siglaPartido}`}).exec();
            }
        },
        despesas:  {
            type: new GraphQLList(DeputadoDespesasType),
            args: { ano: {type: GraphQLString}, mes: {type: GraphQLString}},
            resolve(parent, args){
                let query = { id_deputado: `${parent.id}` };
                if (args.ano != null) query = { ...query, ano: `${args.ano}`};
                if (args.mes != null) query = { ...query, mes: `${args.mes}`};
               return DeputadoDespesa.find(query);
            }
        }
    })
});

const PartidoCamaraType = new GraphQLObjectType({
    name: 'partidoCamara',
    fields: () => ({
        id: { type: GraphQLString },
        sigla: { type: GraphQLString },
        nome: { type: GraphQLString },
        deputados: {
            type: new GraphQLList(DeputadoType),
            resolve(parent, args){
                return Deputado.find({siglaPartido: `${parent.sigla}`});
            }
        }
    })
});

const DeputadoDespesasType = new GraphQLObjectType({
    name: 'deputadoDespesa',
    fields: () => ({
        id_deputado: { type: GraphQLString },
        ano: { type: GraphQLString },
        mes: { type: GraphQLString },
        tipoDespesa: { type: GraphQLString },
        idDocumento: { type: GraphQLString },
        tipoDocumento: { type: GraphQLString },
        idTipoDocumento: { type: GraphQLString },
        dataDocumento: { type: GraphQLString },
        numDocumento: { type: GraphQLString },
        valorDocumento: { type: GraphQLString },
        urlDocumento: { type: GraphQLString },
        nomeFornecedor: { type: GraphQLString },
        cnpjCpfFornecedor: { type: GraphQLString },
        valorLiquido: { type: GraphQLString },
        valorGlosa: { type: GraphQLString },
        numRessarcimento: { type: GraphQLString },
        idLote: { type: GraphQLString },
        parcela: { type: GraphQLString },
        deputado: {
            type: DeputadoType,
            resolve(parent, args){
                return Deputado.findOne({ id: `${parent.id_deputado}`}).exec();
            }
        },
    })
});

const SenadorType = new GraphQLObjectType({
    name: 'senador',
    fields: () => ({
        id: { type: GraphQLString }, // CodigoParlamentar
        nome: { type: GraphQLString }, // NomeParlamentar
        nomeCivil: { type: GraphQLString }, // NomeCompletoParlamentar
        sexo: { type: GraphQLString }, // SexoParlamentar
        formaTratamento: { type: GraphQLString },
        urlFoto: { type: GraphQLString },
        email: { type: GraphQLString },
        siglaPartido: { type: GraphQLString }, // SiglaPartidoParlamentar
        siglaUf: { type: GraphQLString }, // UfParlamentar
        dataNascimento: { type: GraphQLString },
        ufNascimento: { type: GraphQLString }, //UfNaturalidade
        endereco: { type: GraphQLString }, // EnderecoParlamentar
        telefone: { type: GraphQLString }, // TelefoneParlamentar
        fax: { type: GraphQLString }, // FaxParlamentar
        partido: {
            type: PartidoSenadoType,
            resolve(parent, args) {
                return PartidoSenado.findOne({ sigla: `${parent.siglaPartido}`}).exec();
            }
        },
        autorias: {
            type: new GraphQLList(AutoriaType),
            resolve(parent, args){
                return Autoria.find({senador_id: `${parent.id}`});
            }
        }
    })
});

const PartidoSenadoType = new GraphQLObjectType({
    name: 'partidoSenado',
    fields: () => ({
        codigo: { type: GraphQLString },
        sigla: { type: GraphQLString },
        nome: { type: GraphQLString },
        dataCriacao: { type: GraphQLString },
        senadores: {
            type: new GraphQLList(SenadorType),
            resolve(parent, args) {
                return Senador.find({siglaPartido: `${parent.sigla}`});
            }
        }
    })
});

const AutoriaType = new GraphQLObjectType({ 
    name: 'autoria',
    fields: () => ({
        id: { type: GraphQLString }, // CodigoMateria
        siglaCasa: { type: GraphQLString }, // SiglaCasaIdentificacaoMateria
        nomeCasa: { type: GraphQLString }, // NomeCasaIdentificacaoMateria
        siglaSubtipo: { type: GraphQLString }, // SiglaSubtipoMateria
        descricaoSubtipo: { type: GraphQLString }, // DescricaoSubtipoMateria
        numero: { type: GraphQLString }, // NumeroMateria
        ano: { type: GraphQLString }, // AnoMateria
        indicadorTramitando: { type: GraphQLString },
        ementa: { type: GraphQLString }, // EmentaMateria
        indicadorAutorPrincipal: { type: GraphQLString },
        indicadorOutrosAutores: { type: GraphQLString },
        senador_id: { type: GraphQLString },
        senador: {
            type: SenadorType,
            resolve(parent, args){
                return Senador.findOne({ id: `${parent.senador_id}`}).exec();
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        deputados: {
            type: new GraphQLList(DeputadoType),
            resolve(parent, args){
                return Deputado.find({});
            }
        },
        deputado: {
            type: DeputadoType,
            args: { id: {type: GraphQLString} },
            resolve(parent, args) {
                // code to get data from DB / other source
                try {
                    const deputado = Deputado.findOne({id: `${args.id}`}).exec();
                    if(!deputado) {
                        throw new Error('something bad happened');
                    }
                    return deputado;
                } catch (ex) {
                    callback(ex);
                }
            }
        },
        partidosCamara: {
            type: new GraphQLList(PartidoCamaraType),
            resolve(parent, args){
                return PartidoCamara.find({});
            }
        },
        partidoCamara: {
            type: PartidoCamaraType,
            args: { sigla: {type: GraphQLString} },
            resolve(parent, args) {
                // code to get data from DB / other source
                try {
                    const partidoCamara = PartidoCamara.findOne({sigla: `${args.sigla}`}).exec();
                    if(!partidoCamara) {
                        throw new Error('something bad happened');
                    }
                    return partidoCamara;
                } catch (ex) {
                    callback(ex);
                }
            }
        },
        deputadoDespesas: {
            type: new GraphQLList(DeputadoDespesasType),
            args: { deputado_id: {type: GraphQLString}, ano: {type: GraphQLString}, mes: {type: GraphQLString}},
            resolve(parent, args){
                let query = {};
                if (args.deputado_id != null) query = { ...query, id_deputado: `${args.deputado_id}`};
                if (args.ano != null) query = { ...query, ano: `${args.ano}`};
                if (args.mes != null) query = { ...query, mes: `${args.mes}`};
                return DeputadoDespesa.find(query);
            }
        },
        senadores: {
            type: new GraphQLList(SenadorType),
            args: {
                sexo: {type: GraphQLString},
                siglaPartido: {type: GraphQLString},
                siglaUf: {type: GraphQLString},
                ufNascimento: {type: GraphQLString}
            },
            resolve(parent, args){
                // Define the query
                let query = {};
                if (args.sexo != null) query = { ...query, sexo: `${args.sexo}`};
                if (args.siglaPartido != null) query = { ...query, siglaPartido: `${args.siglaPartido}`};
                if (args.siglaUf != null) query = { ...query, siglaUf: `${args.siglaUf}`};
                if (args.ufNascimento != null) query = { ...query, ufNascimento: `${args.ufNascimento}`};

                return Senador.find(query);
            }
        },
        senador: {
            type: SenadorType,
            args: { id: {type: GraphQLString} },
            resolve(parent, args) {
                // Define the query
                let query = {};
                if (args.id != null) query = { ...query, id: `${args.id}`};

                // code to get data from DB / other source
                try {
                    const senador = Senador.findOne(query).exec();
                    if(!senador) {
                        throw new Error('something bad happened');
                    }
                    return senador;
                } catch (ex) {
                    callback(ex);
                }
            }
        },
        partidosSenado: {
            type: new GraphQLList(PartidoSenadoType),
            resolve(parent, args){
                return PartidoSenado.find({});
            }
        },
        partidoSenado: {
            type: PartidoSenadoType,
            args: { sigla: {type: GraphQLString} },
            resolve(parent, args) {
                // code to get data from DB / other source
                try {
                    const partidoSenado = PartidoSenado.findOne({sigla: `${args.sigla}`}).exec();
                    if(!partidoSenado) {
                        throw new Error('something bad happened');
                    }
                    return partidoSenado;
                } catch (ex) {
                    callback(ex);
                }
            }
        },
        autorias: {
            type: new GraphQLList(AutoriaType),
            args: { id: {type: GraphQLString}, senador_id: {type: GraphQLString}, ano: {type: GraphQLString} },
            resolve(parent, args) {
                let query = {};
                if (args.id != null) query = { ...query, id: `${args.id}`};
                if (args.senador_id != null) query = { ...query, senador_id: `${args.senador_id}`};
                if (args.ano != null) query = { ...query, ano: `${args.ano}`};
                return Autoria.find(query);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});