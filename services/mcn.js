/*
 * http://meucongressonacional.com/
 */

const axios = require('axios');

const base = "http://meucongressonacional.com/api/001";

const getTiririca = () => {
    const url = `${base}/deputado/160976`;
    return axios
        .get(url)
        .then(data => {
            return data;
    });
};

const getDeputado = (id) => {
    const url = `${base}/deputado`;
    if (id != null) {
        url = `${url}/${id}`;
    }
    return axios
        .get(url)
        .then(data => {
           return data.data;
        });
};

module.exports = {
    base,
    getTiririca,
    getDeputado
};