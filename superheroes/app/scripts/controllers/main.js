'use strict';

angular.module('Superheroes').controller('MainControler', ['$scope', 'comicVine', function($scope, comicVine) {
    comicVine.then(function(data) {
        $scope.contents = data.results;
    });
}]);
