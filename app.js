'use strict';

var app 		= require('./config/express')();
var http 		= require('http').Server(app);
var io 			= require('socket.io')(http);
var sockets		= [];
//var sequelize = require(__dirname + '/config/sequelize')();

// sockets
io.on('connection', function(socket) {

	// connect
	sockets.push(socket);
	console.log('new user connected');

	// on city initial location
	socket.on('city', function(data) {
		console.log(data.city);
	});

	// disconnect
	socket.on('disconnect', function() {
		var index = sockets.indexOf(socket);
		sockets.splice(index, 1);
	    console.log('user disconnected');
	});

});

// routes
app.get('/', function(req, res) {
	res.render('index', {title: 'GPS Tracker'});
});

app.post('/track/:id/:lat/:long/:key', function(req, res) {
	io.emit('location', req.params);
	res.end();
});

app.get('/track/:id/:lat/:long/:key', function(req, res) {
	io.emit('location', req.params);
	res.end();
});

// start server
/*var server = http.listen(process.env.PORT || 8080, function(){
  var host = server.address().address;
  var host = '127.0.0.1';
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});*/

var models = require("app/models/index");

models.sequelize.sync().then(function() {
    
    var server = http.listen(process.env.PORT || 8080, function(){
	  var host = server.address().address;
	  var host = '127.0.0.1';
	  var port = server.address().port;
	
	  console.log('App listening at http://%s:%s', host, port);
	});
    
});