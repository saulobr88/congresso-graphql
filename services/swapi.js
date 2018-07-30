const axios = require('axios');

const base = "https://swapi.co/api";

const getLuke = () => {
    const url = `${base}/people/1/`;
    return axios
        .get(url)
        .then(data => {
           return data.data;
        });
};

const aboutApi = () => {
    return axios.get(`${base}/`).then(data => {
        return data.data
    });
};

const films = (endpoint = null) => {
    let url = `${base}/films/`;
    if (endpoint != null) {
        url = endpoint;
    }
    return axios.get(url).then(data => {
        return data.data
    });
}

const people = (endpoint = null) => {
    let url = `${base}/people/`;
    if (endpoint != null) {
        url = endpoint;
    }

    return axios.get(url).then(data => {
        return data.data;
    });
}

const planets = (endpoint = null) => {
    let url = `${base}/planets/`;
    if (endpoint != null) {
        url = endpoint;
    }

    return axios.get(url).then(data => {
        return data.data
    });
}

const species = (endpoint = null) => {
    let url = `${base}/species/`;
    if (endpoint != null) {
        url = endpoint;
    }

    return axios.get(url).then(data => {
        return data.data
    });
}

const starships = (endpoint = null) => {
    let url = `${base}/starships/`;
    if (endpoint != null) {
        url = endpoint;
    }
    return axios.get(url).then(data => {
        return data.data
    });
}

const vehicles = (endpoint = null) => {
    let url = `${base}/vehicles/`;
    if (endpoint != null) {
        url = endpoint;
    }
    return axios.get(url).then(data => {
        return data.data
    });
}

module.exports = {
    base,
    getLuke,
    aboutApi,
    films,
    people,
    planets,
    species,
    starships,
    vehicles
};