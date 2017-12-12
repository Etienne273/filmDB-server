//
// ./api/v1/voorstelling.routes.v1.js
//
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Voorstelling = require('../model/voorstelling.model');

//
// Geef een lijst van alle voorstellingen.
//
routes.get('/voorstellingen', function(req, res) {
    res.contentType('application/json');
    Voorstelling.find({})
        .then((voorstellingen) => {
            // console.log(voorstellingn);
            res.status(200).json(voorstellingen);
        })
        .catch((error) => res.status(401).json(error));
});

//
// Retourneer één specifieke voorstellingen. Hier maken we gebruik van URL parameters.
// Vorm van de URL: http://hostname:3000/api/v1/voorstellingen/23
//
routes.get('/voorstellingen/:id', function(req, res) {

});

//
// Voeg een voorstelling toe. De nieuwe info wordt gestuurd via de body van de request message.
// Vorm van de URL: POST http://hostname:3000/api/v1/voorstellingen
//
routes.post('/voorstellingen', function(req, res) {

});

//
// Wijzig een bestaande voorstelling. De nieuwe info wordt gestuurd via de body van de request message.
// Er zijn twee manieren om de id van de voorstellingen mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: PUT http://hostname:3000/api/v1/voorstellingen/23
//
routes.put('/voorstellingen/:id', function(req, res) {

});

//
// Verwijder een bestaande voorstelling.
// Er zijn twee manieren om de id van de voorstellingen mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: DELETE http://hostname:3000/api/v1/voorstellingen/23
//
routes.delete('/voorstellingen/:id', function(req, res) {

});

module.exports = routes;