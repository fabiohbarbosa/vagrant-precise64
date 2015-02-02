var express = require('express');
var router = express.Router();

var Pizza = require('../models/pizza');

module.exports = function (app) {
    app.use('/', router);
};

router.post('/pizza', function (req, res) {
    var pizza = pizzaService.create(req,body);
    pizzaService.save(pizza);
    res.status(201).end();
});

router.get('/pizza/:id', function(req, res) {
    var id = req.params.id;
    pizzaService.get(id);
});

var pizzaService = {
    get : function(id) {

    },
    create : function(body) {
        var pizza = new Pizza({
            nome:       body.nome,
            descricao:  body.descricao,
            preco:      body.preco
        });
        return pizza;
    },
    save : function(pizza) {
        pizza.save(function(err, pizza) {
            if (err) return console.error(err);
            console.dir(pizza);
        });
    }
}