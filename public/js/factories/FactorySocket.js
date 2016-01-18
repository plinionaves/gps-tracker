(function() {
    
    'use strict';
    
    angular.module('GPSTracker').factory('factorySocket', function() {
        
        var socket = io.connect();
        
        return socket;
        
    });
    
})();