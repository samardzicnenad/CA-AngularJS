'use strict';

angular.module('Superheroes').controller('PowersController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("powers", "sort=name:asc").then(function(data) {
        $scope.powers = data.results;
    });
}]);
