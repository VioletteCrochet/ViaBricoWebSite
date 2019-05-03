const express = require('express');
const { argv } = require('yargs');
const http = require('http');
const { app } = require('../routes.js');
const { postFournisseur, postUser } = require('./apiRequest.js');
const bodyParser = require('body-parser')

const inputPort = argv._[0]
const defaultPort = (inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0)) ? inputPort : 3000;

http.Server(app)

app.listen(defaultPort, () => {
    console.log('app served on port: ' + defaultPort)
});


const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post('/api/fournisseur', urlencodedParser, function (req, res) {
    postFournisseur;
    console.log(req.body);
    res.sendFile(__dirname + '/fournisseurs.html')
})

// app.use(express.static(__dirname + '/assets'));

// apiRequest.postUser().then((response) => {
//     console.log(response.userName);
//     // return apiRequest;
// }).catch((err) => {
//     console.log(err);
// });