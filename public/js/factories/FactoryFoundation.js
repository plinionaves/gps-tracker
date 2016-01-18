(function() {
    
    'use strict';
    
    angular.module('GPSTracker').factory('factoryFoundation', function() {
        
        var foundation = {
            init: function() {
                $(document).foundation();
            }
        };
        
        return foundation;
        
    });
    
})();