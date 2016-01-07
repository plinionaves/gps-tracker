'use strict';

var express 	= require('express');
var load		= require('express-load');
var path		= require('path');
var app 		= express();
var http 		= require('http').Server(app);
var io 			= require('socket.io')(http);
var db_config	= require('./config/database.js');
var mysql		= require('mysql');
var connection	= mysql.createConnection(db_config);
var sockets		= [];
/*var cities		= [
					{
						id: 1,
						name: 'São Sebastião do Paraíso'
						state: {
							id: 1,
							name: 'Minas Gerais',
							abbr: 'MG'
						},
						empresas: [
							{ id: 1, nome: 'Transparaíso Ltda', veiculos: [] }
						]
					}
				]*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// static files
app.use(express.static(path.join(__dirname, 'public')));

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
	res.render('index');
});

app.get('/track/:id/:lat/:long/:key', function(req, res) {
	io.emit('location', req.params);
	res.end();
});

// start server
var server = http.listen(process.env.PORT || 8080, function(){
  //var host = server.address().address;
  var host = '127.0.0.1';
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});