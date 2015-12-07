'use strict';

angular.module('Superheroes').controller('PublishersController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.getData("publishers", "filter=location_city:'New York'").then(function(data) {
        $scope.publishers = data.results;
    });
}]);
