'use strict';

angular.module('Superheroes', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainControler',
            templateUrl: 'views/main.html'
        })
        .when('/publishers/', {
            controller: 'PublishersController',
            templateUrl: 'views/publishers.html'
        })
        .when('/volumes/', {
            controller: 'VolumesController',
            templateUrl: 'views/volumes.html'
        })
        .when('/issues/', {
            controller: 'IssuesController',
            templateUrl: 'views/issues.html'
        })
        .when('/teams/', {
            controller: 'TeamsController',
            templateUrl: 'views/teams.html'
        })
        .when('/characters/', {
            controller: 'CharactersController',
            templateUrl: 'views/characters.html'
        })
        .when('/origins/', {
            controller: 'OriginsController',
            templateUrl: 'views/origins.html'
        })
        .when('/powers/', {
            controller: 'PowersController',
            templateUrl: 'views/powers.html'
        })
        .when('/concepts/', {
            controller: 'ConceptsController',
            templateUrl: 'views/concepts.html'
        })
        .when('/objects/', {
            controller: 'ObjectsController',
            templateUrl: 'views/objects.html'
        })
        .when('/locations/', {
            controller: 'LocationsController',
            templateUrl: 'views/locations.html'
        })
        .when('/404/', {
            templateUrl: 'views/404.html'
        })
        .otherwise({
            redirectTo: '/404'
        });
});
/*.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);*/
