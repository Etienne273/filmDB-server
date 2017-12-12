const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoorstellingSchema = new Schema({
    name: String,
    description: String,
    imagePath: String
}, {
    timestamps: true
});


const Voorstelling = mongoose.model('voorstelling', VoorstellingSchema);

// Add a 'dummy' voorstelling (every time you require this file!)
const voorstelling = new Voorstelling({
    name: 'Baby Boss',
    description: 'Baby die geheim agent is',
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/0e/The_Boss_Baby_poster.jpg'
});//.save();

module.exports = Voorstelling;