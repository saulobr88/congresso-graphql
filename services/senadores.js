/*
 * https://dadosabertos.camara.leg.br/howtouse/2017-05-16-js-resultados-paginados.html
 * https://dadosabertos.camara.leg.br/swagger/api.html#api
 */

const axios = require('axios');

const base = "http://legis.senado.gov.br/dadosabertos/senador";

const getSenadores = (id) => {
    let url = `${base}/deputados`;
    if (id != null) {
        url = `${url}/${id}`;
    } else {
        url = `${url}/lista/atual`;
    }
    return axios
        .get(url)
        .then(data => {
           return data.data;
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

module.exports = {
    base,
    getSenadores,
    getPartidos
};