window.addEventListener('load', function(e) {

	var map = document.getElementById('map');
	var options = {
		center: new google.maps.LatLng(-20.727502, -46.621531),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.EARTH
	};
	// instaciate GPSTraker
	var GPSTracker = new window.GPSTracker(map, options);

	// add new marker
	GPSTracker.addMarker(options.center, google.maps.Animation.BOUNCE);


	// socket
	io = io.connect();

	// send initial location
	io.emit('city', {city: 'ssp'});

	// when change position of a marker
	io.on('location', function(data) {
		var position = new google.maps.LatLng(data.lat, data.long);
		GPSTracker.setMarkerPosition(position, 0);
		GPSTracker.centerMap(position);
	});

});