'use strict';

angular.module('Superheroes').controller('PublishersController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("publishers", "sort=location_city:desc").then(function(data) {
        $scope.publishers = data.results;
    });
}]);
