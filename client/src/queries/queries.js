//import { gql } from 'apollo-boost';
import gql from 'graphql-tag';

// Query sem parametros
const getDeputados = gql`
    {
        deputados {
            id
            nome
            nomeCivil
            sexo
            siglaPartido
            siglaUf
            urlFoto
        }
    }
`;

// Query com parametros
const getDeputado = gql`
    query($id: String!) {
        deputado(id: $id) {
            id
            nome
            nomeCivil
            sexo
            siglaPartido
            siglaUf
            urlFoto
            idLegislatura
            dataUltimoStatus
            nomeEleitoral
            condicaoEleitoral
            cpf
            urlWebsite
            redeSocial
            dataNascimento
            dataFalecimento
            ufNascimento
            municipioNascimento
            escolaridade
            partido {
                id
                nome
                sigla
            }
            despesas {
                ano
                mes
                tipoDespesa
                idDocumento
                tipoDocumento
                idTipoDocumento
                dataDocumento
                numDocumento
                valorDocumento
                urlDocumento
                nomeFornecedor
                cnpjCpfFornecedor
                valorLiquido
                valorGlosa
                numRessarcimento
                idLote
                parcela
            }
        }
    }
`;

const getPartidoCamara = gql`
    query($sigla: String!) {
        partidoCamara(sigla: $sigla){
            id
            nome
            sigla
            deputados {
                id
                nome
                nomeCivil
                sexo
                siglaPartido
                siglaUf
                urlFoto
            }
        }
    }
`;

const getPartidosCamara = gql`
    {
        partidosCamara{
            id
            nome
            sigla
            deputados {
                id
            }
        }
    }
`;

const getSenadores = gql`
    {
        senadores {
            id
            nome
            nomeCivil
            sexo
            siglaPartido
            siglaUf
            urlFoto
        }
    }
`;

const getSenador = gql`
    query($id: String!){
        senador(id: $id) {
            id
            nome
            nomeCivil
            sexo
            siglaPartido
            siglaUf
            urlFoto
            formaTratamento
            email
            dataNascimento
            ufNascimento
            endereco
            telefone
            fax
            partido {
                codigo
                nome
                sigla
            }
            autorias {
                id
                numero
                nomeCasa
                ementa
                ano
                indicadorTramitando
            }
        }
    }
`;

export { 
    getDeputados, getDeputado, 
    getPartidosCamara, getPartidoCamara, 
    getSenadores, getSenador 
};
