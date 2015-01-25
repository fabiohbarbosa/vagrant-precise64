var express = require('express');
var config = require('./config/config');
var glob = require('glob');

// Express
var app = express();

require('./config/express')(app, config);
require('./config/mongoose')(config);

// Server
var server = app.listen(config.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})