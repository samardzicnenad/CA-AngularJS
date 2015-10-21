'use strict';

angular.module('Alphabet').controller('letterController', ['$scope', 'letters', '$routeParams', function($scope, letters, $routeParams) {
    letters.success(function(data) {
        var letterObj = data.letters[$routeParams.id];
        letterObj.total = data.total_words;
        letterObj.total_for_letter = Math.round(data.total_words / 100 * letterObj.percentage);
        $scope.letter = letterObj;
    });
}]);
