const express = require('express');

const app = express();

app.get('/ajouter-un-fournisseur', (req, res) => {
    res.sendFile(dirname + '/ajouter.html')
});

app.get('/connexion', (req, res) => {
    res.sendFile(dirname + '/connexion.html')
});

app.get('/fiche-détaillée', (req, res) => {
    res.sendFile(dirname + '/fichedetaillee.html')
});

app.get('/liste-des-fournisseurs', (req, res) => {
    res.sendFile(dirname + '/fournisseurs.html')
});

// app.post('/connexion', (req, res) => {
//     res.
// });

module.exports = { app };