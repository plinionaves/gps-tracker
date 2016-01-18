(function() {
   
    'use strict';
    
    angular.module('GPSTracker').controller('AccountCreateController', function($http) {
      
        var vm = this;
      
        vm.cities = [];
      
        vm.showCities = function() {
            vm.cities = [
                {id: 1, name: 'São Sebastião do Paraíso'},
                {id: 2, name: 'Passos'},
                {id: 3, name: 'Teste'}
            ]
        }
        
        vm.createAccount = function() {
            console.log(vm.account);
        }
       
    });
    
})();