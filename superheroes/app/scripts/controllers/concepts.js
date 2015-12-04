'use strict';

angular.module('Superheroes').controller('ConceptsController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("concepts", "filter=name:life&sort=name:asc").then(function(data) {
        console.log(data.results[0]);
        $scope.concepts = data.results;
    });
}]);
