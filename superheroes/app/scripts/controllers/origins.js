'use strict';

angular.module('Superheroes').controller('OriginsController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("origins", "filter=name:a&sort=name:asc").then(function(data) {
        $scope.origins = data.results;
    });
}]);
