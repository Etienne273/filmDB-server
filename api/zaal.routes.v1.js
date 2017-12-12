var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Zaal = require('../model/zaal.model');

//
// Geef een lijst van alle zalen.
//
routes.get('/zalen', function(req, res) {
    res.contentType('application/json');
    Zaal.find({})
        .then((zalen) => {
            res.status(200).json(zalen);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/zalen/:id', function(req, res) {
    res.contentType('application/json');
    Zaal.findById(req.params.id)
        .then((zaal) => {
            res.status(200).json(zaal);
        })
        .catch((error) => res.status(401).json(error));
});

routes.delete('/zalen/:id', function(req, res) {
    var id = req.params.id;

    Zaal.findById(id)
        .then(zaal => { 
            zaal.remove();
            res.status(200).send("Zaal verwijderd");
        })
        .catch(error => res.status(401).json(error));
});
routes.post('/zalen', function(req, res) {
    var new_zaal = new Zaal(req.body);
    new_zaal.save(function(err, task) {
      if (err)
        res.send(err);
        res.json(task);
    });
});

routes.put('/zalen/:id', function(req, res) {
    
        res.contentType('application/json');
        var id = req.params.id;
    
        var update = { 
            "name" : req.body.name, 
            "description" : req.body.description,
        };
        Zaal.findById(id)
            .then( zaal => {
                zaal.set(update);
                zaal.save();
                res.status(200).json(zaal);
                
            })
            .catch((error) => res.status(401).json(error));
});

module.exports = routes;