

var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Film = require('../model/film.model');

//
// Geef een lijst van alle films.
//
routes.get('/films', function(req, res) {
    res.contentType('application/json');
    Film.find({})
        .then((films) => {
            // console.log(films);
            res.status(200).json(films);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/films/:id', function(req, res) {   
    res.contentType('application/json');
    Film.findById(req.params.id)
    .then((film) => {
        // console.log(film);
        res.status(200).json(film);
    })
    .catch((error) => res.status(401).json(error));
    });

    routes.put('/films/:id', function(req, res) {
        
            res.contentType('application/json');
            var id = req.params.id;
        
            var update = { 
                "name" : req.body.name, 
                "description" : req.body.description,
                "imagePath": req.body.imagePath
            };
            Film.findById(id)
                .then( film => {
                    film.set(update);
                    film.save();
                    res.status(200).json(film);
                    
                })
                .catch((error) => res.status(401).json(error));
        });

        routes.post('/films', function(req, res) {
            var new_film = new Film(req.body);
            new_film.save(function(err, task) {
              if (err)
                res.send(err);
                res.json(task);
            });
        });

    routes.delete('/films/:id', function(req, res) {
        var id = req.params.id;
    
        Film.findById(id)
            .then(film => { 
                film.remove();
                res.status(200).send("Film verwijderd");
            })
            .catch(error => res.status(401).json(error));
    });

module.exports = routes;