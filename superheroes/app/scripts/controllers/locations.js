'use strict';

angular.module('Superheroes').controller('LocationsController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("locations", "filter=name:island&sort=name:asc").then(function(data) {
        console.log(data.results[0]);
        $scope.locations = data.results;
    });
}]);
