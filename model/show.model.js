const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
    date: String
});

const Show = mongoose.model('show', ShowSchema);

const show1 = new Show({
    date: 'Monday 18-12-2017 19:00'
});//.save();


module.exports = Show;