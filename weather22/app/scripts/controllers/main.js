'use strict';

angular.module("Weather 22").controller('MainController', ['$scope', 'cities', function($scope, cities) {
    cities.success(function(data) {
        $scope.list = data.list;
    });
}]);
