var express = require('express');
var config = require('./config/config');
var glob = require('glob');

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
    require(model);
});
var app = express();

require('./config/express')(app, config);

var server = app.listen(config.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})