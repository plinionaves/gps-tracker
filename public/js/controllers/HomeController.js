(function() {
   
   'use strict';
   
   angular.module('GPSTracker').controller('HomeController', function($scope, factorySocket, factoryFoundation) {
       
      $scope.title = 'GPS Tracker';
        
      $scope.$on('$viewContentLoaded', function(){
           
         factoryFoundation.init();
			
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
        
        	// send initial location
        	factorySocket.emit('city', {city: 'ssp'});
        
        	// when change position of a marker
        	factorySocket.on('location', function(data) {
        		var position = new google.maps.LatLng(data.lat, data.long);
        		GPSTracker.setMarkerPosition(position, 0);
        		GPSTracker.centerMap(position);
        	});
			
	  	});
       
   });
    
})();