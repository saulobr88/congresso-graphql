import { gql } from 'apollo-boost';

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

export { getDeputados, getSenadores };
