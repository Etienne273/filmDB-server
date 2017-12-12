const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const HallSchema = new Schema({
    name: String,
    description: String
});

const Hall = mongoose.model('hall', HallSchema);

const hall1 = new Hall({
    name: 'Zaal 1',
    description:'200 plekken',
});//.save();

const hall2 = new Hall({
    name: 'Zaal 2',
    description:'150 plekken',
});//.save();

const hall3 = new Hall({
    name: 'Zaal 3',
    description:'250 plekken',
});//.save();

const hall4 = new Hall({
    name: 'Zaal 4',
    description:'300 plekken',
});//.save();

module.exports = Hall;