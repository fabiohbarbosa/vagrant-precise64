var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'pizzaria'
        },
        port: 3000,
        db: 'mongodb://localhost/development'
    },

    test: {
        root: rootPath,
        app: {
            name: 'pizzaria'
        },
        port: 3000,
        db: 'mongodb://localhost/test'
    },

    production: {
        root: rootPath,
        app: {
            name: 'pizzaria'
        },
        port: 3000,
        db: 'mongodb://localhost/production'
    }
};
module.exports = config[env];