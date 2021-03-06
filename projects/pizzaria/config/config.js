var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'pizzaria'
        },
        port: 3000
    },

    test: {
        root: rootPath,
        app: {
            name: 'pizzaria'
        },
        port: 3000
    },

    production: {
        root: rootPath,
        app: {
            name: 'pizzaria'
        },
        port: 3000
    }
};

module.exports = config[env];