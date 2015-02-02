/**
 * Created by fabio on 01/02/15.
 */
var mongoose = require('mongoose');

var pizzasSchema = new mongoose.Schema({
    id:             Number,
    nome:           String,
    descricao:      String,
    preco:          Number
});

var pizza = mongoose.model('Pizza', pizzasSchema);

module.exports = pizza;