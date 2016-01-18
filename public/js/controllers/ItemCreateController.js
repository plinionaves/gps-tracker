(function() {
   
    'use strict';
    
    angular.module('GPSTracker').controller('ItemCreateController', function($http) {
      
        var vm = this;
      
        vm.createItem = function() {
            console.log(vm.item);
        };
        
       
    });
    
})();