/*
 * https://dadosabertos.camara.leg.br/howtouse/2017-05-16-js-resultados-paginados.html
 * https://dadosabertos.camara.leg.br/swagger/api.html#api
 */

const axios = require('axios');

const base = "https://dadosabertos.camara.leg.br/api/v2";

const getTiririca = () => {
    const url = `${base}/deputados/160976`;
    return axios
        .get(url)
        .then(data => {
            return data;
    });
};

const getOneDeputado = (id) => {
    let url = `${base}/deputados`;
    if (id != null) {
        url = `${url}/${id}`;
    } else {
       return [];
    }
    return axios
        .get(url)
        .then(data => {
           return data.data;
        });
};

const getDeputados = (endpoint = null, itens = 100) => {
    let url = `${base}/deputados?itens=${itens}`;
    if (endpoint != null) {
        url = endpoint;
    }
    return axios
        .get(url)
        .then(data => {
           return data.data;
        });
};

const getDespesas = (endpoint = null, id = null, ano = 2018, itens = 100) => {
    let url = `${base}/deputados`;
    if (endpoint != null) {
        url = endpoint;
    } else if( id != null ) {
        url = `${url}/${id}/despesas?ano=${ano}&itens=${itens}`;
    } else {
        return [];
    }
    
    return axios
        .get(url)
        .then(data => {
           return data.data;
        });
}

const getPartidos = (endpoint = null, itens = 100) => {
    let url = `${base}/partidos?itens=${itens}`;
    if ( endpoint != null ) {
        url = endpoint;
    }
    return axios
        .get(url)
        .then(data => {
           return data.data;
        });
}

module.exports = {
    base,
    getTiririca,
    getOneDeputado,
    getDeputados,
    getDespesas,
    getPartidos
};