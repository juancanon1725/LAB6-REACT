// src/api/apiclient.js

import axios from 'axios';

const apiclient = {
    getBlueprintsByAuthor: (authname) => {
        return axios.get(`/api/${authname}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error al obtener planos por autor:', error);
                return [];
            });
    },
    getBlueprintsByNameAndAuthor: (authname, bpname) => {
        return axios.get(`/api/${authname}/${bpname}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error al obtener plano por nombre y autor:', error);
                return null;
            });
    }
};

export default apiclient;

