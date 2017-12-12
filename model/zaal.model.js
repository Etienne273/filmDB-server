const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const ZaalSchema = new Schema({
    name: String,
    description: String
});

const Zaal = mongoose.model('zaal', ZaalSchema);

const zaalA = new Zaal({
    name: 'Zaal 4',
    description:'200 plekken',
});//.save();

const zaalB = new Zaal({
    name: 'Zaal 6',
    description:'150 plekken',
});//.save();



module.exports = Zaal;