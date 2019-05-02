const express = require('express');

const app = express();

app.get('/ajouter-un-fournisseur', (req, res) => {
    res.sendFile(__dirname + '/ajouter.html')
});

app.get('/connexion', (req, res) => {
    res.sendFile(__dirname + '/connexion.html')
});

app.get('/fiche-détaillée', (req, res) => {
    res.sendFile(__dirname + '/fichedetaillee.html')
});

app.get('/liste-des-fournisseurs', (req, res) => {
    res.sendFile(__dirname + '/fournisseurs.html')
});

// app.post('/connexion', (req, res) => {
//     res.
// });

module.exports = { app };