'use strict';

angular.module('Superheroes').controller('TeamsController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("teams", "sort=count_of_team_members:desc").then(function(data) {
        $scope.teams = data.results;
    });
}]);
