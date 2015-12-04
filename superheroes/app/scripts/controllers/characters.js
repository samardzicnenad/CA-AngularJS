'use strict';

angular.module('Superheroes').controller('CharactersController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("characters", "filter=name:woman&sort=name:desc").then(function(data) {
        $scope.characters = data.results;
    });
}]);
