const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;

const Deputado = require('../models/deputado');

const DeputadoType = new GraphQLObjectType({
    name: 'Deputado',
    fields: () => ({
        id: { type: GraphQLString },
        nomeParlamentar: { type: GraphQLString },
        nomeCompleto: { type: GraphQLString },
        cargo: { type: GraphQLString },
        partido: { type: GraphQLString },
        mandato: { type: GraphQLString },
        sexo: { type: GraphQLString },
        uf: { type: GraphQLString },
        telefone: { type: GraphQLString },
        email: { type: GraphQLString },
        nascimento: { type: GraphQLString },
        fotoURL: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
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
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});