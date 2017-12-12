var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Show = require('../model/show.model');

//
// Geef een lijst van alle shows.
//
routes.get('/shows', function(req, res) {
    res.contentType('application/json');
    Show.find({})
        .then((shows) => {
            // console.log(shows);
            res.status(200).json(shows);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/shows/:id', function(req, res) {
    res.contentType('application/json');
    Show.findById(req.params.id)
        .then((show) => {
            // console.log(show);
            res.status(200).json(show);
        })
        .catch((error) => res.status(401).json(error));
});

routes.delete('/shows/:id', function(req, res) {
    var id = req.params.id;

    Show.findById(id)
        .then(show => { 
            show.remove();
            res.status(200).send("Show verwijderd");
        })
        .catch(error => res.status(401).json(error));
});

module.exports = routes;