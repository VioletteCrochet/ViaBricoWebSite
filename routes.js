const express = require('express');

const app = express();

app.get('/ajouter', (req, res) => {
    res.sendFile(__dirname + '/ajouter.html')
});

app.get('/connexion', (req, res) => {
    res.sendFile(__dirname + '/connexion.html')
});

app.get('/fiche-detaille', (req, res) => {
    res.sendFile(__dirname + '/fichedetaillee.html')
});

app.get('/fournisseurs', (req, res) => {
    res.sendFile(__dirname + '/fournisseurs.html')
});

app.get('/fournisseurs', (req, res) => {
    res.sendFile(__dirname + '/fournisseurs.html')
});

app.post('/fournisseurs', (req, res) => {
    res.sendFile(__dirname + '/fournisseurs.html')
});

app.post('/connexion', (req, res) => {

});



// app.post('/connexion', (req, res) => {
//     res.
// });

module.exports = { app };