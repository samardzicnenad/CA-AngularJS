'use strict';

angular.module('Superheroes').controller('ConceptsController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("concepts", "filter=name:life&sort=name:asc").then(function(data) {
        $scope.concepts = data.results;
    });
}]);
