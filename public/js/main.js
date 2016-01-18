(function() {
    
    'use strict';
    
    angular.module('GPSTracker', ['ngRoute'])
    
    .config(function($routeProvider) {
        
        $routeProvider
            .when('/', {templateUrl: 'partials/home.html', controller: 'HomeController', controllerAs: 'home'})
            .when('/account/create', {templateUrl: 'partials/account/create.html', controller: 'AccountCreateController', controllerAs: 'accountCreate'})
            .when('/item/create', {templateUrl: 'partials/item/create.html', controller: 'ItemCreateController', controllerAs: 'itemCreate'})
            .otherwise({redirectTo: '/'});
        
    });
    
})();