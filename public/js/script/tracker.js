window.addEventListener('load', function(e) {

	var map = document.getElementById('map');
	var options = {
		center: new google.maps.LatLng(20, 1),
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.EARTH
	};
	// instaciate GPSTraker
	var GPSTracker = new window.GPSTracker(map, options);

	// add new marker
	GPSTracker.addMarker(options.center, google.maps.Animation.BOUNCE);


	// socket
	io = io.connect();

	io.on('location', function(data) {
		var position = new google.maps.LatLng(data.lat, data.long);
		GPSTracker.setMarkerPosition(position, 0);
		GPSTracker.centerMap(position);
	});

});