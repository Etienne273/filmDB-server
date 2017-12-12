var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Hall = require('../model/hall.model');

//
// Geef een lijst van alle films.
//
routes.get('/halls', function(req, res) {
    res.contentType('application/json');
    Hall.find({})
        .then((halls) => {
            // console.log(halls);
            res.status(200).json(halls);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/halls/:id', function(req, res) {
    res.contentType('application/json');
    Hall.findById(req.params.id)
        .then((hall) => {
            // console.log(hall);
            res.status(200).json(hall);
        })
        .catch((error) => res.status(401).json(error));
});

routes.delete('/halls/:id', function(req, res) {
    var id = req.params.id;

    Hall.findById(id)
        .then(hall => { 
            hall.remove();
            res.status(200).send("Hall verwijderd");
        })
        .catch(error => res.status(401).json(error));
});

module.exports = routes;