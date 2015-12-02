'use strict';

angular.module('Superheroes').controller('MainControler', ['$scope', 'comicVine', function($scope, comicVine) {

    // initializing the carousel time interval
    $scope.carouselInterval = 10000;

    //comicVine.getData("issues", "filter=id:37736").then(function(data) {
        //$scope.character = data.results[0];
    //});
}]);
