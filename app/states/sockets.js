module.exports = function(io) {
    
    // sockets
    io.on('connection', function(socket) {
    
    	// connect
    	//sockets.push(socket);
    	console.log('new user connected');
    
    	// on city initial location
    	socket.on('city', function(data) {
    		console.log(data.city);
    	});
    
    	// disconnect
    	socket.on('disconnect', function() {
    		//var index = sockets.indexOf(socket);
    		//sockets.splice(index, 1);
    	    console.log('user disconnected');
    	});
    
    });

};