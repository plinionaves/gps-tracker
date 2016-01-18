var express     = require('express');
var load        = require('express-load');
var bodyParser  = require('body-parser');
var path		= require('path');
var sequelize   = require('sequelize-middleware');
var db          = require('./database.json');
var env         = process.env.NODE_ENV || 'development';
var db			= require('./../app/models');

module.exports = function() {
    
    var app = express();
    
    // variável de ambiente
    app.set('port', 3000);
    app.set('models', db);
    
    // middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    //app.use(sequelize(db[env].database, db[env].user, db[env].password, { host: 'localhost' }, path.resolve(__dirname, './../app/models')));
    
    // template engine
    app.set('view engine', 'jade');
    app.set('views', './app/views');
    
    // load modules
    load('controllers', {cwd: 'app'}) // ignore index.js file
        //.then('controllers')
        .then('routes')
        //.then('states')
        .then('migrations')
        .into(app);
        
    return app;
    
};