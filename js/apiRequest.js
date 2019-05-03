const request = require ('request');

const postUser = () => {
    return new Promise((resolve, reject) => {
        request( {
            url: 'https://viabricosrm.herokuapp.com/user',
            json: true
        }, (error, response, body) => {
            if(!body) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

const postFournisseur = () => {
    return new Promise((resolve, reject) => {
        request( {
            url: 'https://viabricosrm.herokuapp.com/api/fournisseur',
            json: true
        }, (error, response, body) => {
            if(!body) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};


module.exports = {
    postUser,
    postFournisseur
};