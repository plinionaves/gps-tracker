;(function() {

	'use strict';

	var GPSTracker = function(mapElem, mapOptions) {

		// attributes
		var that = this;
		var center;
		var map;
		var markers = [];

		// constructor
		(function() {

			/*(mapOptions === undefined) ? throw 'Missing argument 2' : '';
			(locationOptions === undefined) ? throw 'Missing argument 3' : '';*/

			// object Map
			map = new google.maps.Map(mapElem, mapOptions);

		}());

		// getters and setters
		this.setCenter = function(vCenter) {
			center = vCenter;
		}

		// center map
		this.centerMap = function(vLocation) {
			var location = vLocation || center;
			map.panTo(location);
			return that;
		}

		// alter position of marker
		this.setMarkerPosition = function(vLocation, index) {
			var location = vLocation || center;
			markers[index].setPosition(location);
			return that;
		}

		this.addMarker = function(latLng, vAnimation) {

			var marker = new google.maps.Marker({
				position: latLng,
				animation: vAnimation
			});

			marker.setMap(map);
			markers.push(marker);

			return that;
		}


	};

	window.GPSTracker = GPSTracker;

})();