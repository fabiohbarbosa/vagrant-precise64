var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'example'
    },
    port: 3000,
    db: 'mongodb://localhost/example-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'example'
    },
    port: 3000,
    db: 'mongodb://localhost/example-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'example'
    },
    port: 3000,
    db: 'mongodb://localhost/example-production'
    
  }
};

module.exports = config[env];
