'use strict';

angular.module('Superheroes').controller('IssuesController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("issues", "filter=cover_date:1900-01-01|1999-12-31,name:joker&sort=cover_date:asc").then(function(data) {
        $scope.issues = data.results;
    });
}]);
