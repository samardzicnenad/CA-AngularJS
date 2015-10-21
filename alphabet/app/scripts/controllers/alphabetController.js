'use strict';

angular.module('Alphabet').controller('alphabetController', ['$scope', 'letters',  function($scope, letters) {
    letters.success(function(data) {
        $scope.alphabet = data;
    });
}]);
