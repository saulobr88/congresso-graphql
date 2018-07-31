/*
 * https://dadosabertos.camara.leg.br/howtouse/2017-05-16-js-resultados-paginados.html
 * https://dadosabertos.camara.leg.br/swagger/api.html#api
 */

const axios = require('axios');

const base = "http://legis.senado.gov.br/dadosabertos/senador";

const getOneSenador = (id) => {
    let url = `${base}`;
    if (id != null) {
        url = `${url}/${id}`;
    } else {
        return [];
    }

    return axios
        .get(url)
        .then(data => {
            // Dados do senador selecionado
            return data.data.DetalheParlamentar.Parlamentar;
        });    
}

const getSenadores = () => {
    let url = `${base}/lista/atual`;
    
    return axios
        .get(url)
        .then(data => {
            // Lista de Senadores Parlamentares em exercício
            return data.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar;
        });
};

const getPartidos = () => {
    let url = `${base}/partidos`;
    
    return axios
        .get(url)
        .then(data => {
            // Array de Partidos
           return data.data.ListaPartidos.Partidos.Partido;
        });
}

const getAutorias = (id) => {
    // http://legis.senado.gov.br/dadosabertos/senador/4981/autorias
    let url = `${base}/${id}/autorias`;
    return axios
        .get(url)
        .then(data => {
            // Array de Partidos
            return data.data.MateriasAutoriaParlamentar.Parlamentar.Autorias.Autoria;
        })
        .catch( (error) => {
            // handle error
            // console.log(error);
            return [];
        });
}

module.exports = {
    base,
    getSenadores,
    getOneSenador,
    getPartidos,
    getAutorias
};