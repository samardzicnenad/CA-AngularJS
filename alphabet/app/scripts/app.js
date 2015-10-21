'use strict';

var app = angular.module('Alphabet', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'alphabetController',
            templateUrl: 'views/alphabet.html'
        })
        .when('/:id', {
            controller: 'letterController',
            templateUrl: 'views/letter.html'
        })
            .otherwise({
            redirectTo: '/'
        });
});
