'use strict';

angular.module('Superheroes').controller('VolumesController', ['$scope', 'comicVine', function($scope, comicVine ) {
    comicVine.search("resources=volume&query=aquaman").then(function(data) {
        $scope.volumes = data.results;
    });
}]);


