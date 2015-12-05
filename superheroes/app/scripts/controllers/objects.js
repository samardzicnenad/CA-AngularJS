'use strict';

angular.module('Superheroes').controller('ObjectsController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("objects", "filter=name:sword&sort=name:asc").then(function(data) {
        $scope.objects = data.results;
    });
}]);
