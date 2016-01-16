var express     = require('express');
var load        = require('express-load');
var bodyParser  = require('body-parser');
var path		= require('path');

module.exports = function() {
    
    var app = express();
    
    // variável de ambiente
    app.set('port', 3000);
    
    // middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    
    // template engine
    app.set('view engine', 'jade');
    app.set('views', './app/views');
    
    // load modules
    /*load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        //.then('states')
        .into(app);*/
        
    return app;
    
};