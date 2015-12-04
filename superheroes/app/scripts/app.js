'use strict';

angular.module('Superheroes', ['ngRoute', 'ui.bootstrap'])
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainControler',
            templateUrl: 'views/main.html'
        })
        .when('/characters/', {
            controller: 'CharactersController',
            templateUrl: 'views/characters.html'
        })
        .when('/concepts/', {
            controller: 'ConceptsController',
            templateUrl: 'views/concepts.html'
        })
        .when('/issues/', {
            controller: 'IssuesController',
            templateUrl: 'views/issues.html'
        })
        .when('/locations/', {
            controller: 'LocationsController',
            templateUrl: 'views/locations.html'
        })
        .when('/objects/', {
            controller: 'ObjectsController',
            templateUrl: 'views/objects.html'
        })
        .when('/origins/', {
            controller: 'OriginsController',
            templateUrl: 'views/origins.html'
        })
        .when('/powers/', {
            controller: 'PowersController',
            templateUrl: 'views/powers.html'
        })
        .when('/publishers/', {
            controller: 'PublishersController',
            templateUrl: 'views/publishers.html'
        })
        .when('/teams/', {
            controller: 'TeamsController',
            templateUrl: 'views/teams.html'
        })
        .when('/volumes/', {
            controller: 'VolumesController',
            templateUrl: 'views/volumes.html'
        })
        .when('/404/', {
            templateUrl: 'views/404.html'
        })
        .otherwise({
            redirectTo: '/404'
        });
});
